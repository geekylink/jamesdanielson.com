<script>
  import { route } from './router.svelte.js';

  const links = [
    { href: '#/', label: 'Home', match: (p) => p === '/' },
    { href: '#/blog', label: 'Blog', match: (p) => p.startsWith('/blog') },
    { href: '#/map', label: 'Map', match: (p) => p === '/map' }
  ];
</script>

<header>
  <div class="container bar">
    <a class="brand" href="#/">
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <circle cx="16" cy="13" r="8" fill="#ffd23f" />
        <path d="M0 21c4 0 4-3 8-3s4 3 8 3 4-3 8-3 4 3 8 3v11H0z" fill="#0a7377" />
      </svg>
      <span>James Danielson</span>
    </a>
    <nav aria-label="Main">
      {#each links as l}
        <a href={l.href} aria-current={l.match(route.path) ? 'page' : undefined}>{l.label}</a>
      {/each}
    </nav>
  </div>
</header>

<style>
  header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    color: #2b1006;
  }
  .bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 0;
  }
  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-display);
    font-weight: 650;
    font-size: 1.1rem;
    text-decoration: none;
  }
  .brand svg {
    transition: transform 0.5s var(--ease);
  }
  .brand:hover svg {
    transform: rotate(-18deg) scale(1.12);
  }
  nav {
    display: flex;
    gap: 0.25rem;
  }
  nav a {
    position: relative;
    padding: 0.4rem 0.85rem;
    border-radius: 999px;
    font-weight: 500;
    text-decoration: none;
    transition:
      background-color 0.25s var(--ease),
      transform 0.25s var(--ease);
  }
  nav a:hover {
    background: rgba(255, 255, 255, 0.45);
    transform: translateY(-1px);
  }
  nav a[aria-current='page'] {
    background: #2b1006;
    color: #fff3df;
  }
</style>
