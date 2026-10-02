import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// base './' lets the built site work from any folder or sub-path on a static host.
export default defineConfig({
  base: './',
  plugins: [svelte()]
});
