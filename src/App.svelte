<script>
  import { route } from './lib/router.svelte.js';
  import Header from './lib/Header.svelte';
  import Footer from './lib/Footer.svelte';
  import PageHero from './lib/PageHero.svelte';
  import Home from './routes/Home.svelte';
  import Blog from './routes/Blog.svelte';
  import Post from './routes/Post.svelte';
  import MapPage from './routes/MapPage.svelte';
</script>

<Header />

{#if route.path === '/'}
  <Home />
{:else if route.path === '/blog'}
  <Blog />
{:else if route.path.startsWith('/blog/')}
  {#key route.path}
    <Post slug={decodeURIComponent(route.path.slice('/blog/'.length))} />
  {/key}
{:else if route.path === '/map'}
  <MapPage />
{:else}
  <PageHero compact title="Page not found" subtitle="That address doesn't lead anywhere.">
    <p class="home"><a href="#/">Back to the homepage</a></p>
  </PageHero>
{/if}

<Footer />

<style>
  .home {
    margin: 1.2rem 0 0;
    font-weight: 600;
  }
</style>
