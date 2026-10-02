<script>
  import PageHero from '../lib/PageHero.svelte';
  import { posts, allCategories, formatDate, excerpt } from '../lib/blog.js';

  let query = $state('');
  let category = $state('');

  let filtered = $derived.by(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (category && !p.categories.includes(category)) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.post.toLowerCase().includes(q) ||
        p.categories.some((c) => c.toLowerCase().includes(q))
      );
    });
  });

  function reset() {
    query = '';
    category = '';
  }
</script>

<svelte:head>
  <title>Blog | James Danielson</title>
</svelte:head>

<PageHero compact title="Blog" subtitle="Notes from the coast and the keyboard." />

<main class="container">
  <div class="controls">
    <div class="field">
      <label class="sr-only" for="search">Search posts</label>
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
      <input id="search" type="search" placeholder="Search posts" bind:value={query} autocomplete="off" />
    </div>
    <div class="field select">
      <label class="sr-only" for="category">Filter by category</label>
      <select id="category" bind:value={category}>
        <option value="">All categories</option>
        {#each allCategories as c}
          <option value={c}>{c}</option>
        {/each}
      </select>
    </div>
  </div>

  <p class="count" aria-live="polite">
    {filtered.length}
    {filtered.length === 1 ? 'post' : 'posts'}{category ? ` in ${category}` : ''}
  </p>

  {#if filtered.length}
    <ul class="list">
      {#each filtered as p (p.slug)}
        <li>
          <article class="post">
            <time datetime={p.date}>{formatDate(p.date)}</time>
            <h2><a href={`#/blog/${p.slug}`}>{p.title}</a></h2>
            <p>{excerpt(p.post)}</p>
            {#if p.categories.length}
              <div class="chips">
                {#each p.categories as c}
                  <button type="button" class="chip" class:on={category === c} onclick={() => (category = category === c ? '' : c)}>{c}</button>
                {/each}
              </div>
            {/if}
          </article>
        </li>
      {/each}
    </ul>
  {:else}
    <div class="empty">
      <p>No posts match your search. Try a different keyword or category.</p>
      <button type="button" class="reset" onclick={reset}>Clear search and filters</button>
    </div>
  {/if}
</main>

<style>
  .controls {
    display: grid;
    gap: 0.75rem;
  }
  .field {
    position: relative;
  }
  .field svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    translate: 0 -50%;
    color: var(--ink-soft);
    pointer-events: none;
  }
  input,
  select {
    width: 100%;
    padding: 0.85rem 1rem;
    border: 2px solid #f1cd93;
    border-radius: 14px;
    background: #fffaf0;
    color: var(--ink);
    font: inherit;
    transition:
      border-color 0.25s var(--ease),
      box-shadow 0.25s var(--ease);
  }
  input {
    padding-left: 2.8rem;
  }
  input:focus,
  select:focus {
    outline: none;
    border-color: var(--coral);
    box-shadow: 0 0 0 4px rgba(255, 84, 64, 0.18);
  }
  .count {
    margin: 1.25rem 0 0.75rem;
    color: var(--ink-soft);
    font-size: 0.95rem;
  }
  .list {
    display: grid;
    gap: 1rem;
    margin: 0;
    padding: 0 0 3rem;
    list-style: none;
  }
  .post {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 100%;
    padding: 1.4rem;
    border-radius: 18px;
    background: #fffaf0;
    box-shadow: var(--shadow);
    transition:
      transform 0.35s var(--ease),
      box-shadow 0.35s var(--ease);
  }
  .post:hover,
  .post:focus-within {
    transform: translateY(-4px);
    box-shadow: 0 22px 34px -18px rgba(160, 70, 20, 0.5);
  }
  time {
    font-size: 0.9rem;
    color: var(--ink-soft);
  }
  h2 {
    font-size: 1.45rem;
  }
  h2 a {
    text-decoration: none;
  }
  /* Whole card is clickable through the title link. */
  h2 a::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 18px;
  }
  .post p {
    margin: 0;
    color: var(--ink-soft);
  }
  .chips {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: auto;
    padding-top: 0.5rem;
  }
  .chip {
    padding: 0.2rem 0.75rem;
    border: 0;
    border-radius: 999px;
    background: var(--shell);
    color: var(--ink);
    font: inherit;
    font-size: 0.88rem;
    cursor: pointer;
    transition:
      background-color 0.2s var(--ease),
      transform 0.2s var(--ease);
  }
  .chip:hover {
    background: var(--sun);
    transform: translateY(-1px);
  }
  .chip.on {
    background: var(--ink);
    color: var(--sand);
  }
  .empty {
    padding: 2rem 0 4rem;
  }
  .reset {
    padding: 0.7rem 1.1rem;
    border: 0;
    border-radius: 999px;
    background: var(--coral);
    color: #2b0a05;
    font: inherit;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s var(--ease);
  }
  .reset:hover {
    transform: translateY(-2px);
  }
  @media (min-width: 640px) {
    .controls {
      grid-template-columns: 1fr 15rem;
    }
    .list {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
