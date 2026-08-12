# Circuit Bowling Association — Deployment Playbook (Ubuntu + Nginx + PM2)

This repo uses `@lovable.dev/vite-tanstack-config`. Production `base` must match Nginx:

```typescript
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

/** Public URL path (trailing slash). Must match Nginx `location` and `PREVIEW_URL` in preview.html. */
const PRODUCTION_BASE = "/cba/";

export default defineConfig({
  cloudflare: false,
  vite: {
    base: PRODUCTION_BASE,
    server: {
      allowedHosts: ["demo.sourapps.com", "localhost", "127.0.0.1"],
    },
    preview: {
      allowedHosts: ["demo.sourapps.com", "localhost", "127.0.0.1"],
    },
  },
});
```

### 1.5 `preview.html`

```javascript
const PREVIEW_URL = "https://demo.sourapps.com/cba/";
```

Local override:

```text
preview.html?url=http://localhost:8085/cba/
```

---

## Step 2 — VPS deployment (copy/paste)

```bash
# 1. Web root
cd /var/www

# 2. Clone / pull into CBA folder
git clone https://github.com/SH-FSP/CircuitBowlingAssociation.git CBA
cd /var/www/CBA

# 3. Install dependencies
npm install

# 4. Production build (base = /cba/)
npm run build

# 5. Production preview
pm2 start "npx vite preview --host 0.0.0.0 --port 50002" --name cba
pm2 save
```

---

## Step 3 — Nginx configuration

```nginx
# circuit bowling
location /cba/ {
    proxy_pass http://127.0.0.1:50002;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}

location = /cba/preview.html {
    alias /var/www/CBA/preview.html;
}
```

Notes:
- `proxy_pass` has **no** trailing URI, so `/cba/` is forwarded as `/cba/` to Vite — Vite `base` must be `/cba/`.
- Phone frame: `https://demo.sourapps.com/cba/preview.html`

Reload:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## Step 4 — Verify

- App: `https://demo.sourapps.com/cba/`
- Preview frame: `https://demo.sourapps.com/cba/preview.html`

---

## Local development

```bash
cd D:\CircuitBowlingAssociation
npm install
npm run dev
```

Open the printed local URL (base path `/cba/`).
