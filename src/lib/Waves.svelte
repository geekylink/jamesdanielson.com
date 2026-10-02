<div class="waves" aria-hidden="true">
  <div class="w w1"></div>
  <div class="w w2"></div>
  <div class="w w3"></div>
</div>

<style>
  .waves {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 6.5rem;
    pointer-events: none;
  }
  .w {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: repeat-x;
    background-size: 1200px 100%;
  }
  .w1 {
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath fill='%230a7377' fill-opacity='.55' d='M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 L1200,120 L0,120Z'/%3E%3C/svg%3E");
    animation: drift 26s linear infinite;
  }
  .w2 {
    height: 78%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath fill='%230a7377' d='M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 L1200,120 L0,120Z'/%3E%3C/svg%3E");
    animation: drift 19s linear infinite reverse;
  }
  .w3 {
    height: 48%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath fill='%23fff3df' d='M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 L1200,120 L0,120Z'/%3E%3C/svg%3E");
    animation: drift 34s linear infinite;
  }
  @keyframes drift {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: -1200px;
    }
  }
</style>
