document.addEventListener('alpine:init', () => {
  Alpine.data('mediaControl', () => ({
    playing: false,
    init() {
      this.playing = JSON.parse(this.$el.dataset.initiallyPlaying);

      this.$watch('playing', (playing) => {
        if (playing) {
          this.$dispatch('media-control--play');
        } else {
          this.$dispatch('media-control--pause');
        }
      });
    },
  }));
});
