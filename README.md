# The Till — in-house ordering app

A landscape-only, EPOS-style web app for Android tablets. No payments — just
build an order, hold it against a numbered tab, and recall tabs later. Tabs can
sync across every tablet through Cloudflare, or run fully on-device with no
backend at all.

## Files

| File            | What it is                                                        |
|-----------------|-------------------------------------------------------------------|
| `index.html`    | The whole app (HTML + CSS + JS). This is what runs on the tablet. |
| `menu.json`     | **Your menu.** Edit this to change categories/items/prices.       |
| `manifest.json` | PWA manifest — makes it install fullscreen + landscape-locked.    |
| `sw.js`         | Service worker so the till still opens if Wi-Fi drops.            |
| `worker.js`     | Cloudflare Worker (the sync API). Only needed if you want sync.   |
| `schema.sql`    | Database table for the Worker.                                    |

---

## 1. Quick start (no backend, works immediately)

1. Create a new GitHub repo (public is fine), e.g. `till`.
2. Upload `index.html`, `menu.json`, `manifest.json`, `sw.js` and two icons
   (`icon-192.png`, `icon-512.png` — any square logo will do).
3. Repo **Settings → Pages → Build and deployment → Deploy from a branch**,
   pick `main` / `/ (root)`, Save.
4. After a minute your app is live at `https://<you>.github.io/till/`.
5. Open it on the tablet → tap **Fullscreen**. Done.

At this stage every tablet keeps its **own** tabs on the device. Good for a
single till. For shared tabs across multiple tablets, do step 2 below.

> **Landscape lock:** for a true lock, open the site on the tablet's Chrome,
> menu → **Add to Home screen / Install app**, then launch it from that icon.
> The manifest forces fullscreen + landscape. For a fully locked-down till,
> a kiosk browser (e.g. Fully Kiosk Browser) is the most reliable option.

---

## 2. Add cloud sync (Cloudflare Worker + D1)

This makes all tablets share the same live set of tabs. Free tier is plenty.

```bash
# one-off: install + log in
npm install -g wrangler
npx wrangler login

# create the worker project
npm create cloudflare@latest till-api      # choose "Hello World" Worker, JS
cd till-api

# replace src/index.js (or src/index.ts) with the contents of worker.js
# copy schema.sql into the project folder too

# create the database
npx wrangler d1 create till-db
```

`wrangler d1 create` prints a block like this — paste it into `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"                 # MUST be "DB" — the code uses env.DB
database_name = "till-db"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

Then:

```bash
npx wrangler d1 execute till-db --remote --file=./schema.sql
npx wrangler deploy
```

Wrangler prints your live URL, e.g. `https://till-api.<you>.workers.dev`.

Finally, open `index.html` and set it near the top:

```js
const CONFIG = {
  API_BASE: "https://till-api.<you>.workers.dev",   // <-- paste it here
  CURRENCY: "£",
  MENU_URL: "menu.json"
};
```

Re-upload `index.html` to GitHub. The status light top-right turns green
(**Synced**) and every tablet now reads/writes the same tabs.

**Security note:** `worker.js` currently allows requests from any origin
(`Access-Control-Allow-Origin: "*"`). To lock it to just your site, change that
line in `worker.js` to your Pages origin, e.g. `"https://<you>.github.io"`,
then redeploy.

---

## 3. Editing the menu

Open `menu.json`. The rule is simple:

- A **category** has a `"children"` array.
- An **item** has a `"price"` (a number) and no children.
- Nest `children` as deep as you want — the app keeps drilling until it reaches
  priced items.
- Only the **top-level** entries appear on the far-right sidebar. `"color"` is
  optional (a hex value like `"#3a86ff"`); it mainly matters at the top level.

```json
{
  "name": "Menu",
  "children": [
    { "name": "Spirits", "color": "#0fa3b1", "children": [
        { "name": "Gin", "children": [
            { "name": "Gordon's", "price": 3.90 }
        ]}
    ]}
  ]
}
```

Save, re-upload, refresh. (If you installed it as an app and don't see changes,
fully close and reopen it — the service worker fetches fresh when online.)

---

## How tabs behave

- **Tab** → keypad → type a number → **GO**. If that tab exists it loads; if it's
  new it starts a tab seeded with whatever is on screen.
- **Open Tabs** → list of every open tab with its total; tap to recall, or ✕ to
  close one.
- **Clear Tab** → empties the screen. If a tab is active it closes that tab.
- While a tab is active, every change auto-saves (the status light flickers to
  "Saving…" then back).
