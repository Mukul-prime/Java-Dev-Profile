# Cloudflare Pages deployment

This React/Vite portfolio is ready for Cloudflare Pages.

## Dashboard values

- Framework preset: `React (Vite)`
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave blank

## GitHub push

Create a GitHub repository named `mukul-vats-portfolio`, then run:

```powershell
git remote add origin https://github.com/Mukul-prime/mukul-vats-portfolio.git
git branch -M main
git add .
git commit -m "Deploy portfolio to Cloudflare Pages"
git push -u origin main
```

Then in Cloudflare: Workers & Pages → Create application → Pages → Import an existing Git repository. Select the repository and use the dashboard values above.
