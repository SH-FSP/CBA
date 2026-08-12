# Circuit Bowling Association — Deployment Playbook (Ubuntu + Nginx + PM2)

This repo uses `@lovable.dev/vite-tanstack-config`. Set production `base` by extending `defineConfig` with a `vite` block:

```typescript
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

/** Public URL path (trailing slash). Must match Nginx `location` and `PREVIEW_URL` in preview.html. */
const PRODUCTION_BASE = "/circuit/";

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

In repo-root `preview.html`, set the iframe target to the same public path:

```javascript
const PREVIEW_URL = "https://demo.sourapps.com/circuit/";
```

Local override example:

```text
preview.html?url=http://localhost:8083/circuit/
```

---

## Step 2 — VPS deployment (copy/paste)

SSH into your Ubuntu server and run (adjust port if needed). Use a **personal access token or SSH key** for GitHub; do **not** embed tokens in shell history or docs.

```bash
# 1. Web root
cd /var/www

# 2. Clone the repository
git clone https://github.com/SH-FSP/CircuitBowlingAssociation.git circuit
cd /var/www/circuit

# 3. Install dependencies
npm install

# 4. Production build
npm run build

# 5. Production preview (must run from project root)
pm2 start "npx vite preview --host 0.0.0.0 --port 50002" --name circuit
pm2 save
```

---

## Step 3 — Nginx configuration

1. Edit your site config, for example:

   ```bash
   sudo nano /etc/nginx/sites-available/default
   ```

2. Inside the correct `server { ... }` block (HTTPS server for `demo.sourapps.com`), add:

```nginx
location /circuit/ {
    proxy_pass http://127.0.0.1:50002/circuit/;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

3. Test and reload:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## Step 4 — Verify

- App: `https://demo.sourapps.com/circuit/`
- Phone frame: open `preview.html` (served or local) with matching `PREVIEW_URL`

---

## Local development

```bash
cd D:\CircuitBowlingAssociation
npm install
npm run dev
```

Open the printed local URL (base path `/circuit/`).
