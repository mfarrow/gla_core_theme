window.vimeoFacade = function vimeoFacade() {
  return {
    revealed: false,
    preconnected: false,
    reveal() {
      this.revealed = true;
      this.$refs.iframe.src = this.$refs.iframe.dataset.src;
      this.$refs.iframe.focus();
      this.createPlayer();
    },
    addPrefetch(kind, url, as) {
      const linkEl = document.createElement('link');
      linkEl.rel = kind;
      linkEl.href = url;
      if (as) {
        linkEl.as = as;
      }
      document.head.append(linkEl);
    },
    warmConnections() {
      if (this.preconnected) return;

      this.addPrefetch('preconnect', 'https://player.vimeo.com');
      this.addPrefetch('preconnect', 'https://i.vimeocdn.com');
      this.addPrefetch('preconnect', 'https://f.vimeocdn.com');
      this.addPrefetch('preconnect', 'https://fresnel.vimeocdn.com');

      this.preconnected = true;
    },
    createPlayer() {
      const app = this;
      if (!loadjs.isDefined('vimeo-iframe-api')) {
        loadjs([`https://player.vimeo.com/api/player.js`], 'vimeo-iframe-api');
      }

      loadjs.ready('vimeo-iframe-api', {
        success() {
          const player = new Vimeo.Player(app.$refs.iframe);
          app.$el.player = player;

          player.getVideoTitle().then((title) => {
            player.on('play', () => {
              player.getCurrentTime().then((time) => {
                // Filter out any 'playing' states caused by people skipping through
                // the video.
                if (time < 1) {
                  window.dataLayer.push({
                    eventCategory: 'Component - Media item',
                    eventAction: 'Video playing',
                    eventLabel: title,
                  });
                }
              });
            });

            player.on('ended', () => {
              window.dataLayer.push({
                eventCategory: 'Component - Media item',
                eventAction: 'Video ended',
                eventLabel: title,
              });
            });
          });
        },
      });
    },
  };
};
