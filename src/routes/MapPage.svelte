<script>
  import { onMount } from 'svelte';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import PageHero from '../lib/PageHero.svelte';
  import pins from '../../map_pins.json';

  const FALLBACK_CENTER = [-1.8267, -80.7526]; // Montañita
  const SAFE_COLOR = /^(#[0-9a-f]{3,8}|[a-z]+|rgba?\([\d\s.,%]+\)|hsla?\([\d\s.,%deg]+\))$/i;

  let mapEl;
  let map;
  const markers = [];

  function safeColor(c) {
    return typeof c === 'string' && SAFE_COLOR.test(c.trim()) ? c.trim() : '#ff5440';
  }

  // "#/blog/slug" and "/blog/slug" stay in the app; anything else opens in a new tab.
  function resolveLink(link) {
    if (!link) return null;
    if (link.startsWith('#/')) return { href: link, external: false };
    if (link.startsWith('/')) return { href: `#${link}`, external: false };
    return { href: link, external: true };
  }

  function pinIcon(color) {
    return L.divIcon({
      className: 'pin',
      html: `<div class="pin-inner" style="--c:${safeColor(color)}"><svg width="32" height="42" viewBox="0 0 32 42" aria-hidden="true"><path d="M16 41S3 26.5 3 15.5a13 13 0 0 1 26 0C29 26.5 16 41 16 41z" fill="var(--c)" stroke="#fff" stroke-width="2.5"/><circle cx="16" cy="15.5" r="5" fill="#fff"/></svg></div>`,
      iconSize: [32, 42],
      iconAnchor: [16, 40],
      popupAnchor: [0, -36]
    });
  }

  function popupContent(p) {
    const el = document.createElement('div');
    el.className = 'popup';
    const title = document.createElement('strong');
    title.textContent = p.name;
    el.append(title);
    if (p.description) {
      const d = document.createElement('p');
      d.textContent = p.description;
      el.append(d);
    }
    const link = resolveLink(p.link);
    if (link) {
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = p.linkLabel || (link.external ? 'Visit link' : 'Read the blog entry');
      if (link.external) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
      el.append(a);
    }
    return el;
  }

  function focusPin(i) {
    const p = pins[i];
    mapEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    map.flyTo([p.location.lat, p.location.lng], Math.max(map.getZoom(), 14), { duration: 1.1 });
    markers[i].openPopup();
  }

  onMount(() => {
    map = L.map(mapEl, { scrollWheelZoom: false });
    // Scroll-wheel zoom only after the map is clicked, so page scrolling never gets hijacked.
    map.once('focus', () => map.scrollWheelZoom.enable());

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for (const p of pins) {
      const marker = L.marker([p.location.lat, p.location.lng], {
        icon: pinIcon(p.color),
        title: p.name,
        alt: p.name
      })
        .addTo(map)
        .bindPopup(() => popupContent(p));
      markers.push(marker);
    }

    if (pins.length > 1) {
      const bounds = L.latLngBounds(pins.map((p) => [p.location.lat, p.location.lng]));
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
    } else if (pins.length === 1) {
      map.setView([pins[0].location.lat, pins[0].location.lng], 13);
    } else {
      map.setView(FALLBACK_CENTER, 12);
    }

    return () => map.remove();
  });
</script>

<svelte:head>
  <title>Map | James Danielson</title>
</svelte:head>

<PageHero compact title="Map" subtitle="Beaches, breaks, and favorite spots on the Ecuadorian coast." />

<main class="container">
  <div class="map" bind:this={mapEl} role="region" aria-label="Interactive map of pinned places"></div>

  {#if pins.length}
    <h2>All pinned places</h2>
    <ul class="places">
      {#each pins as p, i}
        <li>
          <button type="button" onclick={() => focusPin(i)}>
            <span class="dot" style="background:{safeColor(p.color)}"></span>
            <span class="text">
              <strong>{p.name}</strong>
              {#if p.description}<span class="desc">{p.description}</span>{/if}
            </span>
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</main>

<style>
  .map {
    height: min(65vh, 36rem);
    min-height: 20rem;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    border: 3px solid #fffaf0;
    z-index: 0;
  }
  h2 {
    margin: 2.2rem 0 1rem;
    font-size: 1.6rem;
  }
  .places {
    display: grid;
    gap: 0.75rem;
    margin: 0;
    padding: 0 0 3rem;
    list-style: none;
  }
  button {
    display: flex;
    align-items: flex-start;
    gap: 0.9rem;
    width: 100%;
    padding: 1rem 1.1rem;
    border: 0;
    border-radius: 16px;
    background: #fffaf0;
    box-shadow: var(--shadow);
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
    transition:
      transform 0.3s var(--ease),
      box-shadow 0.3s var(--ease);
  }
  button:hover {
    transform: translateY(-3px);
  }
  button:active {
    transform: scale(0.99);
  }
  .dot {
    flex: none;
    width: 1rem;
    height: 1rem;
    margin-top: 0.3rem;
    border-radius: 50%;
    box-shadow: 0 0 0 3px #fff;
    transition: transform 0.3s var(--ease);
  }
  button:hover .dot {
    transform: scale(1.3);
  }
  .text {
    display: grid;
    gap: 0.15rem;
  }
  .desc {
    color: var(--ink-soft);
    font-size: 0.95rem;
  }
  @media (min-width: 760px) {
    .places {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
