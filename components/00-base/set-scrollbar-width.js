document.addEventListener('DOMContentLoaded', (event) => {
  // This is a basic approach taken from CTI's Voyager.
  // Knowing the scrollbar width is important in getting things to line up perfectly
  // as 100vw includes the browser scrollbars if they are visible.
  // If this approach has issues we can try https://codepen.io/shshaw/pen/JqGmKx or
  // https://codepen.io/Mamboleoo/post/scrollbars-and-css-custom-properties which both
  // do a similar thing but via a more complex method.
  const width = window.innerWidth - document.documentElement.clientWidth;
  const root = document.documentElement;
  root.style.setProperty('--scrollbar-width', `${width}px`);
  document.documentElement.classList.add('has-scrollbar-width-set');
});
