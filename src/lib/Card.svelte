<script>
  let {
    href,
    external = false,
    tone = 'sun',
    wide = false,
    kicker = '',
    title,
    text,
    cta,
    icon,
    extra
  } = $props();
</script>

<a
  class="card {tone}"
  class:wide
  {href}
  target={external ? '_blank' : undefined}
  rel={external ? 'noopener noreferrer' : undefined}
>
  <div class="top">
    <span class="icon" aria-hidden="true">{@render icon?.()}</span>
    <span class="kicker">{kicker}</span>
  </div>
  <h2>{title}</h2>
  <p>{text}</p>
  {@render extra?.()}
  <span class="cta">
    <span class="label">{cta}</span>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
    {#if external}<span class="sr-only">(opens in a new tab)</span>{/if}
  </span>
</a>

<style>
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    min-height: 15rem;
    padding: 1.6rem;
    border-radius: var(--radius);
    overflow: hidden;
    text-decoration: none;
    box-shadow: var(--shadow);
    transition:
      transform 0.4s var(--ease),
      box-shadow 0.4s var(--ease);
  }
  .card::after {
    content: '';
    position: absolute;
    right: -3.5rem;
    bottom: -3.5rem;
    width: 11rem;
    height: 11rem;
    border-radius: 50%;
    background: currentColor;
    opacity: 0.07;
    transition: transform 0.7s var(--ease);
    pointer-events: none;
  }
  .card:hover {
    transform: translateY(-6px) rotate(-0.4deg);
    box-shadow:
      0 1px 0 rgba(20, 51, 61, 0.04),
      0 26px 40px -18px rgba(160, 70, 20, 0.55);
  }
  .card:hover::after {
    transform: scale(1.7);
  }
  .card:active {
    transform: translateY(-2px) scale(0.985);
    transition-duration: 0.12s;
  }

  .top {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .icon {
    display: grid;
    place-items: center;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    background: color-mix(in srgb, currentColor 14%, transparent);
    transition: transform 0.5s var(--ease);
  }
  .card:hover .icon {
    transform: rotate(-12deg) scale(1.1);
  }
  .icon :global(svg) {
    width: 1.5rem;
    height: 1.5rem;
  }
  .kicker {
    font-size: 0.95rem;
    font-weight: 500;
    opacity: 0.85;
    overflow-wrap: anywhere;
  }

  h2 {
    font-size: clamp(1.6rem, 5.5vw, 2.05rem);
    max-width: 24rem;
  }
  p {
    margin: 0;
    max-width: 34rem;
    opacity: 0.92;
  }

  .cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: auto;
    padding-top: 0.5rem;
    font-weight: 600;
  }
  .label {
    background: linear-gradient(currentColor, currentColor) 0 100% / 0 2px no-repeat;
    padding-bottom: 2px;
    transition: background-size 0.4s var(--ease);
  }
  .card:hover .label {
    background-size: 100% 2px;
  }
  .cta svg {
    transition: transform 0.35s var(--ease);
  }
  .card:hover .cta svg {
    transform: translateX(6px);
  }

  .dev {
    background: var(--night);
    color: #f4ecff;
  }
  .dev .cta {
    color: #ffc857;
  }
  .blog {
    background: var(--sun);
    color: #2b1a02;
  }
  .map {
    background: var(--sea);
    color: #f2fffd;
  }
  .bar {
    background: var(--coral);
    color: #2b0a05;
  }

  @media (min-width: 760px) {
    .wide {
      grid-column: 1 / -1;
    }
    .card {
      padding: 2rem;
    }
  }
</style>
