/* Minimal service worker.
   Strategy: network-first, fall back to cache when offline.
   This means the tablet always gets the latest version when it has
   signal, but the till still opens if the Wi-Fi drops.
   Bump CACHE if you change files and want to force a refresh. */
const CACHE = "till-v1";
const SHELL = ["./", "index.html", "data.js", "menu.json", "manifest.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  // Never cache API calls to the Worker — always go to network.
  if (url.pathname.endsWith("/tabs") || url.pathname.includes("/tabs/")) return;
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});
