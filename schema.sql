-- Run once against your D1 database:
--   npx wrangler d1 execute till-db --remote --file=./schema.sql
CREATE TABLE IF NOT EXISTS tabs (
  number     TEXT PRIMARY KEY,   -- the tab number, as typed on the keypad
  items      TEXT NOT NULL,      -- JSON array: [{id,name,price,qty}, ...]
  updated_at INTEGER NOT NULL    -- epoch milliseconds
);
