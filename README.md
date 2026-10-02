# Coast Hub

A mobile-first Svelte 5 + Vite site with four homepage cards: developer portfolio, blog, map, and Marea Alta Surf Bar.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs a static site to dist/
npm run preview    # serve the built site locally
```

Requires Node 18+ (Node 20+ recommended). The build is fully static and uses hash routes (`#/blog`, `#/map`), so it works on any static host (Netlify, GitHub Pages, Cloudflare Pages, an S3 bucket, plain nginx) with no server rules.

## Add or edit blog posts

Create a file in `blog/`, for example `blog/my-first-surf-trip.json`. The file name is the URL slug (`#/blog/my-first-surf-trip`).

```json
{
  "title": "My first surf trip",
  "date": "2026-10-05",
  "categories": ["Travel", "Surf"],
  "post": [
    "Markdown goes here, **bold**, [links](https://example.com), lists, code, images.",
    "",
    "Each array item is one line. A single string with \\n also works."
  ]
}
```

- `categories` can hold several values. The blog page builds its category dropdown automatically from all posts.
- The search box matches the title, body, and categories.
- Posts are sorted by `date` (newest first). Use `YYYY-MM-DD`.
- Restart is not needed in dev: Vite hot-reloads when you add or change a file.

## Edit the map

Edit `map_pins.json`. Each pin:

```json
{
  "name": "Montañita beach",
  "location": { "lat": -1.8305, "lng": -80.7562 },
  "description": "Short text shown in the popup and the list under the map.",
  "color": "#ffb81f",
  "link": "#/blog/montanita-sunsets",
  "linkLabel": "Read the blog entry"
}
```

- `link` and `linkLabel` are optional. `#/blog/<file-name>` links to a blog post in this site; any `https://` link opens in a new tab.
- `color` accepts hex (`#ff5440`), color names, `rgb()`, or `hsl()`.
- The sample coordinates are approximate. To get exact ones, right-click a spot on openstreetmap.org and choose "Show address" or copy the coordinates from the URL.

## Change the homepage cards

Everything on the homepage lives in `src/routes/Home.svelte`. Each `<Card>` takes `title`, `text`, `cta`, `href`, and a `tone` (`dev`, `blog`, `map`, `bar`). Colors and fonts are CSS variables at the top of `src/app.css`.

## Project layout

```
blog/                 your posts (JSON)
map_pins.json         your map pins
src/routes/           Home, Blog, Post, MapPage
src/lib/              Header, Footer, Card, PageHero, Waves, router, blog loader
src/app.css           global styles and design tokens
```

Map tiles come from OpenStreetMap's public tile server, which is fine for a small personal site. If traffic grows, switch to a tile provider and keep the attribution.
