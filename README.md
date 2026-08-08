# KSG Fiber website

Production Vite/React website configured for the Bluehost test location:

`https://groundhandai.com/kramer/`

## Local development

```bash
npm ci
npm run dev
```

Vite serves the project beneath `/kramer/`, matching production.

## Production build

```bash
npm ci
npm run build
```

Upload the **contents** of `dist/` (including `.htaccess`) to Bluehost's
`public_html/kramer/` directory. Do not upload the `dist` directory itself.

The included Apache rewrite rules send direct visits and browser refreshes on
nested React routes back to `/kramer/index.html` while leaving real assets and
files untouched.
