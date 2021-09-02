(function heroHeaderWrapper($) {
  // eslint-disable-next-line no-unused-vars
  window.heroHeader = function heroHeader() {
    return {
      videoIsPlaying: false,
      userHasManuallyPaused: false,
      init($watch) {
        const video = this.$refs['hero-header--video'];

        if (!_.isUndefined(video)) {
          this.initVideo(video, $watch);
        }
      },
      initVideo(video, $watch) {
        this.$watch('videoIsPlaying', (value) => {
          if (this.videoIsPlaying) {
            this.$refs['hero-header--video'].play();
          } else {
            this.$refs['hero-header--video'].pause();
          }
        });

        video.addEventListener(
          'play',
          () => {
            this.videoIsPlaying = true;
          },
          false,
        );
        video.addEventListener(
          'pause',
          () => {
            this.videoIsPlaying = false;
          },
          false,
        );

        // Pause the video if a user scrolls away from the video.
        // Because our play button animation is a 'fade out' animation, the 'aos:in'
        // event actually means that the element is disappearing, not appearing.
        document.addEventListener(
          'aos:in:hero-header--video-toggle-play',
          () => {
            this.videoIsPlaying = false;
          },
        );

        // Play the video if a user scrolls back up to the video and we haven't
        // manually paused it before.
        document.addEventListener(
          'aos:out:hero-header--video-toggle-play',
          () => {
            if (!this.userHasManuallyPaused) {
              this.videoIsPlaying = true;
            }
          },
        );

        // Some rules for determining if the video should autoplay.
        // By default let's say that yes, the video should autoplay.
        let shouldWePlayVideo = true;

        // Don't play video if the user prefers reduced motion.
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          shouldWePlayVideo = false;
        }

        // Don't play video if the user has low battery.
        if ('getBattery' in navigator) {
          navigator.getBattery().then((battery) => {
            if (battery.level < 0.2 && !battery.charging) {
              shouldWePlayVideo = false;
            }
          });
        }

        // Don't play video if the user is on a slow connection.
        const connection =
          navigator.connection ||
          navigator.mozConnection ||
          navigator.webkitConnection;
        if (connection) {
          const { type } = connection;
          const { effectiveType } = connection;

          if (type === 'cellular') {
            switch (effectiveType) {
              case 'slow-2g':
              case '2g':
              case '3g':
                shouldWePlayVideo = false;
                break;
              default:
            }
          }
        }

        // Use the `videoIsPlaying` boolean set above to actually set the
        // video playing state.
        if (shouldWePlayVideo) {
          this.videoIsPlaying = true;
        } else {
          this.videoIsPlaying = false;
          this.userHasManuallyPaused = true;
        }
      },
      toggleVideoPlayback() {
        this.videoIsPlaying = !this.videoIsPlaying;
        this.userHasManuallyPaused = !this.userHasManuallyPaused;
      },
      scrollBelowComponent() {
        const belowHeroHeader = this.$refs['hero-header--below'];
        const scroll = new SmoothScroll();
        scroll.animateScroll(
          belowHeroHeader,
          null,
          _.merge({}, window.smoothScrollOptions, {
            updateURL: false,
            popstate: false,
          }),
        );
      },
    };
  };
})(jQuery);
