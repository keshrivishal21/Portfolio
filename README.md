# Portfolio

Personal portfolio website built with React and Tailwind CSS.

This repo contains two apps:

- Root app (Create React App) — the primary app, with a prebuilt production output in `build/`.
- `portfolio-vite/` (Vite) — an experimental/alternative Vite version.

## Repo Layout

- `src/` — main React app source (CRA)
- `public/` — CRA static assets
- `build/` — production build output (generated)
- `portfolio-vite/` — separate Vite app (optional)

## Run Locally (Root / CRA)

```bash
npm install
npm start
```

- Dev server: http://localhost:3000

### Build

```bash
npm run build
```

Outputs to `build/`.

## Run Locally (Vite App)

```bash
cd portfolio-vite
npm install
npm run dev
```

- Dev server: the terminal will print the local URL (typically http://localhost:5173)

### Build

```bash
cd portfolio-vite
npm run build
```

## Environment Variables (EmailJS)

If the contact form uses EmailJS, set your EmailJS keys in a local `.env` file.

Create React App expects variables to start with `REACT_APP_`:

```ini
REACT_APP_EMAILJS_SERVICE_ID=...
REACT_APP_EMAILJS_TEMPLATE_ID=...
REACT_APP_EMAILJS_PUBLIC_KEY=...
```

Do not commit `.env`.

## Tech

- React
- Tailwind CSS
- EmailJS (contact form)

## Notes

- If you only want one app, use the root CRA app.
- The `build/` folder is the output of `npm run build` for the root app.
