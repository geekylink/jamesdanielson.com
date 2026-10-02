<script>
  import { marked } from 'marked';
  import PageHero from '../lib/PageHero.svelte';
  import { posts, formatDate } from '../lib/blog.js';

  let { slug } = $props();

  let post = $derived(posts.find((p) => p.slug === slug));
  let html = $derived(post ? marked.parse(post.post, { async: false }) : '');
</script>

<svelte:head>
  <title>{post ? `${post.title} | James Danielson` : 'Post not found | James Danielson'}</title>
</svelte:head>

{#if post}
  <PageHero compact title={post.title} subtitle={formatDate(post.date)} />
  <main class="container narrow">
    <a class="back" href="#/blog">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
      All posts
    </a>
    {#if post.categories.length}
      <ul class="chips" aria-label="Categories">
        {#each post.categories as c}<li>{c}</li>{/each}
      </ul>
    {/if}
    <article class="prose">{@html html}</article>
  </main>
{:else}
  <PageHero compact title="Post not found" subtitle="That post doesn't exist or was renamed." />
  <main class="container narrow">
    <a class="back" href="#/blog">Back to all posts</a>
  </main>
{/if}

<style>
  .narrow {
    max-width: 42rem;
    padding-bottom: 3rem;
  }
  .back {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: 600;
    text-decoration: none;
    color: var(--sea-deep);
  }
  .back svg {
    transition: transform 0.3s var(--ease);
  }
  .back:hover svg {
    transform: translateX(-5px);
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin: 1rem 0 0;
    padding: 0;
    list-style: none;
  }
  .chips li {
    padding: 0.2rem 0.75rem;
    border-radius: 999px;
    background: var(--shell);
    font-size: 0.88rem;
  }
  .prose {
    margin-top: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.7;
  }
  .prose :global(h2) {
    margin: 2.2rem 0 0.6rem;
    font-size: 1.7rem;
  }
  .prose :global(h3) {
    margin: 1.8rem 0 0.5rem;
    font-size: 1.3rem;
  }
  .prose :global(p),
  .prose :global(ul),
  .prose :global(ol),
  .prose :global(blockquote),
  .prose :global(pre) {
    margin: 0 0 1.1rem;
  }
  .prose :global(a) {
    color: var(--sea-deep);
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
  }
  .prose :global(a:hover) {
    color: var(--coral);
  }
  .prose :global(blockquote) {
    padding: 0.2rem 0 0.2rem 1rem;
    border-left: 4px solid var(--sun);
    color: var(--ink-soft);
  }
  .prose :global(img) {
    max-width: 100%;
    height: auto;
    border-radius: 14px;
  }
  .prose :global(code) {
    padding: 0.1rem 0.35rem;
    border-radius: 6px;
    background: var(--shell);
    font-size: 0.92em;
  }
  .prose :global(pre) {
    padding: 1rem;
    border-radius: 14px;
    background: var(--night);
    color: #f4ecff;
    overflow-x: auto;
  }
  .prose :global(pre code) {
    padding: 0;
    background: none;
    color: inherit;
  }
</style>
