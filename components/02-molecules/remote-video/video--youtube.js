(function video($, Drupal) {
  Drupal.behaviors.rutherfordVideo = {
    liteYoutubeChangeObserved(iframe) {
      iframe.setAttribute('data-youtube-iframe', '');
      iframe.id = `youtube-embed--${Foundation.GetYoDigits()}`;

      if (!loadjs.isDefined('youtube-iframe-api')) {
        loadjs([`https://www.youtube.com/iframe_api`], 'youtube-iframe-api');
      }

      loadjs.ready('youtube-iframe-api', {
        success() {
          window.YT.ready(function YTApiLoaded() {
            $('[data-youtube-iframe]')
              .once('youtube-iframe')
              .each(function createYTPlayerForIframe() {
                const $videoComponent = $(this).closest(
                  '[data-video-provider="youtube"]',
                );

                const ready = () => {
                  $(this).closest('[data-video]').trigger('YTPlayerReady');
                };

                const player = new YT.Player($(this)[0], {
                  events: {
                    onReady: ready,
                  },
                });
                $videoComponent[0].YTPlayer = player;
              });
          });
        },
      });
    },
    attach(context) {
      function setObserver(target, index) {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            const iframe = mutation.target.querySelector('iframe');
            Drupal.behaviors.rutherfordVideo.liteYoutubeChangeObserved(iframe);
          });
        });
        observer.observe(target, {
          childList: true,
        });
      }
      $('lite-youtube', context).each(function eachLiteEmbed(index, el) {
        if (!Modernizr.customelements) {
          // If the browser doesn't support custom elements (e.g. IE11) then we
          // can't use https://github.com/paulirish/lite-youtube-embed so
          // instead we make the play button act more like a link than a button.
          $(this)
            .find('button')
            .click(() => {
              const el = $(this)[0];
              const id = el.getAttribute('videoid');

              window.location = `https://www.youtube.com/watch?v=${id}`;
              return false;
            });
        }

        if (Modernizr.customelements) {
          setObserver(el, index);
        }
      });

      $('[data-video][data-video-provider="youtube"]', context)
        .once('rutherford-video-youtube')
        .each(function eachVideo() {
          $(this).on('YTPlayerReady', () => {
            const player = $(this)[0].YTPlayer;

            // Listen for play/pause events so we can set datalayer events.
            player.addEventListener(
              'onStateChange',
              Drupal.behaviors.rutherfordVideo.youtubeStateChange,
            );

            // Custom code can now listen for the YTPlayerReady event and
            // use the player attached to the DOM node, e.g. to pause a video
            // after 5 seconds:
            // _.delay(() => {
            //   player.pauseVideo();
            // }, 5000);
          });
        });
    },
    youtubeStateChange(event) {
      const state = event.data;
      const videoDetails = event.target.getVideoData();

      if (state === YT.PlayerState.PLAYING) {
        // Filter out any 'playing' states caused by people skipping through
        // the video.
        if (event.target.getCurrentTime() < 1) {
          window.dataLayer.push({
            eventCategory: 'Component - Media item',
            eventAction: 'Video playing',
            eventLabel: videoDetails.title,
          });
        }
      }

      if (state === YT.PlayerState.ENDED) {
        window.dataLayer.push({
          eventCategory: 'Component - Media item',
          eventAction: 'Video ended',
          eventLabel: videoDetails.title,
        });
      }
    },
  };
})(jQuery, Drupal, window.dataLayer);
