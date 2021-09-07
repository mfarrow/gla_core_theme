(function heroImage() {
  document.querySelectorAll('.hero-image').forEach((heroImageElement) => {
    const instance = basicScroll.create({
      elem: heroImageElement,
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

    function recalculateAndUpdate() {
      instance.calculate();
      instance.update();
    }

    window.addEventListener('resize', _.debounce(recalculateAndUpdate, 100));
  });
})();
