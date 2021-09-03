document.addEventListener('alpine:init', () => {
  Alpine.data('heroHeader', () => ({
    videoIsPlaying: false,
    userHasManuallyPaused: false,
    percentageCompleted: 0,
    init() {
      const video = this.$refs['hero-header--video'];

      if (!_.isUndefined(video)) {
        this.initVideo(video);
      }
    },
    initVideo(video) {
      this.$watch('videoIsPlaying', (value) => {
        if (this.videoIsPlaying) {
          video.play();
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

      // Video progress bar logic.
      video.ontimeupdate = () => {
        const totalLength = video.duration % 60;
        this.percentageCompleted = video.currentTime / totalLength;
      };

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
  }));
});
