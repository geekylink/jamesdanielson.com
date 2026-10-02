// Tiny hash router: #/  #/blog  #/blog/some-slug  #/map
// Hash routing means the built site works on any static host with no server rules.
function current() {
  return window.location.hash.replace(/^#/, '') || '/';
}

export const route = $state({ path: current() });

window.addEventListener('hashchange', () => {
  route.path = current();
  window.scrollTo(0, 0);
});
