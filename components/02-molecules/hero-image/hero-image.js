(function heroImage() {
  function screenSize() {
    const mql = window.matchMedia('(min-width: 768px)');
    return mql.matches;
  }

  screenSize();

  window.addEventListener('resize', _.debounce(screenSize, 100));

  const instance = basicScroll.create({
    elem: document.querySelector('.hero-image'),
    from: 'top-middle',
    to: 'bottom-middle',
    direct: true,
    props: {
      '--translateY': {
        from: '0',
        to: `50px`,
      },
    },
  });
  instance.start();
})();
