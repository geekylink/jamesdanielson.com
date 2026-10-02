<script>
  import Waves from './Waves.svelte';

  let { title, subtitle = '', compact = false, children } = $props();
</script>

<section class="sky" class:compact>
  <div class="sun" aria-hidden="true"></div>
  <div class="container inner">
    <h1>{title}</h1>
    {#if subtitle}<p class="sub">{subtitle}</p>{/if}
    {@render children?.()}
  </div>
  <Waves />
</section>

<style>
  .sky {
    position: relative;
    overflow: hidden;
    padding: 7rem 0 8rem;
    background: linear-gradient(180deg, #ff7a4d 0%, #ff9d4a 34%, #ffc35a 72%, #ffe29a 100%);
    color: #2b1006;
  }
  .compact {
    padding: 6rem 0 6.5rem;
  }
  .sun {
    position: absolute;
    right: -3rem;
    top: 4.5rem;
    width: clamp(9rem, 32vw, 17rem);
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #fff3b0, #ffd23f 58%, #ffb21e);
    box-shadow:
      0 0 0 1.1rem rgba(255, 236, 160, 0.3),
      0 0 0 2.4rem rgba(255, 236, 160, 0.16);
    animation: rise 1.6s var(--ease) both;
  }
  .compact .sun {
    width: clamp(7rem, 22vw, 11rem);
    top: 3.8rem;
  }
  .inner {
    position: relative;
    z-index: 1;
  }
  h1 {
    font-size: clamp(2.5rem, 10vw, 4.75rem);
    font-variation-settings: 'opsz' 144;
  }
  .compact h1 {
    font-size: clamp(2.2rem, 8vw, 3.5rem);
  }
  .sub {
    max-width: 28rem;
    margin: 1rem 0 0;
    font-size: clamp(1.1rem, 3.4vw, 1.35rem);
    line-height: 1.4;
  }
  @keyframes rise {
    from {
      transform: translateY(5rem);
      opacity: 0;
    }
    to {
      transform: none;
      opacity: 1;
    }
  }
</style>
