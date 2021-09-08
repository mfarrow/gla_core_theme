(function video($$, Drupal) {
  Drupal.behaviors.glaVideo = {
    liteYoutubeChangeObserved(liteYouTubePlayer) {
      if (!loadjs.isDefined('youtube-iframe-api')) {
        loadjs([`https://www.youtube.com/iframe_api`], 'youtube-iframe-api');
      }

      loadjs.ready('youtube-iframe-api', {
        success() {
          window.YT.ready(function YTApiLoaded() {
            $$(
              once(
                'gla-youtube-iframe',
                '[data-video-provider="youtube"] iframe',
              ),
            ).each(function createYTPlayerForIframe() {
              const player = new YT.Player($$(this)[0], {
                events: {
                  // When the YouTube Player is ready we can start interacting with the player via the API.
                  // We fire a 'YTPlayerReady' event on the remote-video component so that custom JS can
                  // run to do things like control the player or track playback progress.
                  onReady: (event) => {
                    $$(event.target.getIframe())
                      .closest('[data-video]')
                      .trigger('YTPlayerReady');
                  },
                },
              });

              // We make the YTPlayer instance available on the DOM node so other code can use it.
              $$(this).closest('[data-video]')[0].YTPlayer = player;
            });
          });
        },
      });

      // Set a good title on the iframe for accessibility. Otherwise lite-youtube will use
      // the button text which will end up with a title that reads like 'Play Pause'.
      const playLabel = $$(liteYouTubePlayer).attr('playLabel');
      $$(liteYouTubePlayer).find('iframe').attr('title', playLabel);

      // For some reason with lite-youtube-embed we can't focus the iframe to allow keyboard
      // control once the facade has been interacted with. Instead, we have to focus the custom
      // element instead.
      $$(liteYouTubePlayer).attr('tabindex', '-1');
      $$(liteYouTubePlayer)[0].focus();
    },
    attach(context) {
      $$('lite-youtube', context).each(function eachLiteEmbed(index, el) {
        if (Modernizr.customelements) {
          // lite-youtube-embed doesn't give us an event when it has finished creating the YouTube
          // player iframe, so we use a MutationObserver to watch for the iframe creation instead.
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              // We only want to react to the mutation (DOM change) that creates the YouTube player iframe.
              mutation.addedNodes.forEach((node) => {
                if (node.nodeName === 'IFRAME') {
                  Drupal.behaviors.glaVideo.liteYoutubeChangeObserved(
                    mutation.target,
                  );
                }
              });
            });
          });
          observer.observe(el, {
            childList: true,
          });
        } else {
          // If the browser doesn't support custom elements (e.g. IE11) then we
          // can't use https://github.com/paulirish/lite-youtube-embed so
          // instead we make the play button act more like a link than a button.
          $$(this)
            .find('button')
            .on('click', () => {
              const el = $$(this)[0];
              const id = el.getAttribute('videoid');

              window.location = `https://www.youtube.com/watch?v=${id}`;
              return false;
            });
        }
      });

      $$(
        once(
          'gla-video-youtube',
          '[data-video][data-video-provider="youtube"]',
          context,
        ),
      ).on('YTPlayerReady', (event) => {
        const player = event.target.YTPlayer;

        // Listen for play/pause events so we can set datalayer events.
        player.addEventListener(
          'onStateChange',
          Drupal.behaviors.glaVideo.youtubeStateChange,
        );

        // Custom code could now listen for the YTPlayerReady event and
        // use the player attached to the DOM node, e.g. to pause a video
        // after 5 seconds:
        // _.delay(() => {
        //   player.pauseVideo();
        // }, 5000);
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
})(Cash, Drupal);
