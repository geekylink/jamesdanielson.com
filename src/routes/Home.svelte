<script>
  import PageHero from '../lib/PageHero.svelte';
  import Card from '../lib/Card.svelte';
</script>

<svelte:head>
  <title>James Danielson | Developer and surf bar owner in Montañita</title>
</svelte:head>

<PageHero
  title="James Danielson"
  subtitle="Developer and surf bar owner in Montañita, Ecuador. Pick a destination."
/>

<main class="container">
  <div class="grid">
    <Card
      wide
      tone="dev"
      href="https://jamesdanielson.dev"
      external
      kicker="jamesdanielson.dev"
      title="Looking to hire an experienced developer?"
      text="Senior software developer and network & security architect with over 10 years in fintech, cyber security, devops, and games."
      cta="See my developer portfolio"
    >
      {#snippet icon()}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="m7 9 3 3-3 3M13 15h4" />
        </svg>
      {/snippet}
      {#snippet extra()}
        <div class="term" aria-hidden="true">
          <div><span class="prompt">&gt;</span> whoami</div>
          <div class="out">james danielson, senior software developer</div>
          <div><span class="prompt">&gt;</span> experience --years</div>
          <div class="out">over 10<span class="cursor"></span></div>
        </div>
      {/snippet}
    </Card>

    <Card
      tone="blog"
      href="#/blog"
      kicker="Blog"
      title="Read the blog"
      text="Stories, notes, and the occasional tech tangent. Search by keyword or browse by category."
      cta="Read the posts"
    >
      {#snippet icon()}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
          <path d="M4 5.5v16M9 8h7M9 12h5" />
        </svg>
      {/snippet}
    </Card>

    <Card
      tone="map"
      href="#/map"
      kicker="Map"
      title="Explore the map"
      text="Beaches, breaks, and favorite spots along the Ecuadorian coast, pinned on OpenStreetMap."
      cta="Open the map"
    >
      {#snippet icon()}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      {/snippet}
    </Card>

    <Card
      wide
      tone="bar"
      href="#/blog/marea-alta-surf-bar"
      external
      kicker="The Surf Salsa Bar in Montañita, Ecuador"
      title="Marea Alta Surf Bar"
      text="A surf bar in Montañita, Ecuador. See what's happening on social media."
      cta="Check out the post for more information"
    >
      {#snippet icon()}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 9c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 15c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
        </svg>
      {/snippet}
    </Card>
  </div>
</main>

<style>
  .grid {
    display: grid;
    gap: 1.1rem;
    padding-bottom: 3rem;
  }
  .term {
    padding: 0.9rem 1rem;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.07);
    font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
    font-size: 0.9rem;
    line-height: 1.6;
    color: #ffc857;
    overflow-wrap: anywhere;
  }
  .prompt {
    color: #8cf2c2;
  }
  .out {
    color: #f4ecff;
  }
  .cursor {
    display: inline-block;
    width: 0.55em;
    height: 1em;
    margin-left: 0.2em;
    vertical-align: text-bottom;
    background: #ffc857;
    animation: blink 1.1s steps(1) infinite;
  }
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
  @media (min-width: 760px) {
    .grid {
      grid-template-columns: 1fr 1fr;
      gap: 1.4rem;
    }
  }
</style>
