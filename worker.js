/**
 * Cloudflare Worker — Till tab sync API (backed by D1).
 *
 * Routes:
 *   GET    /tabs            → [{ number, items, total, updatedAt }]
 *   GET    /tabs/:number    → { number, items }   (404 if none)
 *   PUT    /tabs/:number    → body { items }       (creates or updates)
 *   DELETE /tabs/:number    → closes / removes the tab
 *
 * Setup is in README.md. In short:
 *   1. npm create cloudflare@latest till-api   (pick "Hello World" Worker)
 *   2. Replace src/index.js with this file.
 *   3. npx wrangler d1 create till-db
 *      → paste the printed binding into wrangler.toml (see README).
 *   4. npx wrangler d1 execute till-db --remote --file=./schema.sql
 *   5. npx wrangler deploy
 *   6. Put the deployed URL into CONFIG.API_BASE in index.html.
 */

const CORS = {
  // Tighten this to your GitHub Pages origin in production, e.g.
  // "https://yourname.github.io"
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...CORS }
  });

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS });

    const url = new URL(request.url);
    const parts = url.pathname.split("/").filter(Boolean); // ["tabs"] or ["tabs","12"]

    try {
      if (parts[0] !== "tabs") return json({ error: "not found" }, 404);

      // /tabs  → list
      if (parts.length === 1 && request.method === "GET") {
        const { results } = await env.DB.prepare(
          "SELECT number, items, updated_at FROM tabs ORDER BY updated_at DESC"
        ).all();
        const tabs = (results || []).map(r => {
          const items = JSON.parse(r.items || "[]");
          return {
            number: r.number,
            items,
            updatedAt: r.updated_at,
            total: items.reduce((s, i) => s + i.price * i.qty, 0)
          };
        });
        return json(tabs);
      }

      // /tabs/:number
      const number = decodeURIComponent(parts[1] || "");
      if (!number) return json({ error: "missing tab number" }, 400);

      if (request.method === "GET") {
        const row = await env.DB.prepare("SELECT number, items FROM tabs WHERE number = ?")
          .bind(number).first();
        if (!row) return json({ error: "not found" }, 404);
        return json({ number: row.number, items: JSON.parse(row.items || "[]") });
      }

      if (request.method === "PUT") {
        const body = await request.json().catch(() => ({}));
        const items = Array.isArray(body.items) ? body.items : [];
        await env.DB.prepare(
          `INSERT INTO tabs (number, items, updated_at) VALUES (?, ?, ?)
           ON CONFLICT(number) DO UPDATE SET items = excluded.items, updated_at = excluded.updated_at`
        ).bind(number, JSON.stringify(items), Date.now()).run();
        return json({ ok: true });
      }

      if (request.method === "DELETE") {
        await env.DB.prepare("DELETE FROM tabs WHERE number = ?").bind(number).run();
        return json({ ok: true });
      }

      return json({ error: "method not allowed" }, 405);
    } catch (err) {
      return json({ error: String(err) }, 500);
    }
  }
};
