document.addEventListener('alpine:init', () => {
  Alpine.data('heroImage', () => ({
    init() {
      basicScroll
        .create({
          elem: this.$el,
          from: 'top-middle',
          to: 'bottom-middle',
          direct: true,
          props: {
            '--translateY': {
              from: '0',
              to: `50px`,
            },
          },
        })
        .start();
    },
  }));
});
