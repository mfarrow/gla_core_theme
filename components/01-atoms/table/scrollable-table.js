document.addEventListener('alpine:init', () => {
  Alpine.data('scrollableTable', () => ({
    scrollable: false,

    // Add a class so that we can only show the scroll affordance shadows once the JS
    // has run. This avoids the flash of incorrectly sized scroll shadows that would
    // appear before the --scrollbar-height and --table-height custom properties had
    // been set. Make sure classes is a function not just an object, otherwise Alpine
    // won't make it reactive.
    get classes() {
      return {
        'has-scroll-affordance': this.scrollable,
      };
    },

    init() {
      // Is the element horizontally scrollable?
      this.scrollable = this.$el.scrollWidth > this.$el.clientWidth;

      // Bail if there is no need to show a scroll indicator.
      if (this.scrollable) {
        const captionEl = this.$el.querySelector('caption');

        // Mark the scrollable div as a region and make it focusable so keyboard users can scroll it.
        this.$el.tabIndex = 0;
        this.$el.role = 'region';
        // If the table has a caption we can label our region too.
        if (captionEl) {
          captionEl.id = `table-caption--${Date.now()}`;
          this.$el.ariaLabelledByElements = [captionEl];
        }

        // Work out the height of the table, ignoring the caption element within the table element.
        let tableHeight = 0;
        let captionHeight = 0;
        let captionMarginBottom = 0;

        const tableEl = this.$el.querySelector('table');

        if (tableEl) {
          tableHeight = tableEl.clientHeight;
        }
        if (captionEl) {
          captionHeight = captionEl.clientHeight;
          // Use parseInt to remove the 'px' from the measurement.
          captionMarginBottom = parseInt(
            window.getComputedStyle(captionEl).marginBottom,
            10,
          );
        }

        // Set the height of the table head and or body as a custom property so we can style our
        // scroll affordances to cover the table body and header but not the caption.
        this.$el.style.setProperty(
          '--table-height',
          `${tableHeight - (captionHeight + captionMarginBottom)}px`,
        );

        // We also need to know the height of the scrollbar (if one is present) so we can set up
        // our CSS to not show a scroll affordance over the scrollbar.
        const scrollbarHeight = this.$el.offsetHeight - this.$el.clientHeight;
        this.$el.style.setProperty(
          '--scrollbar-height',
          `${scrollbarHeight}px`,
        );
      }
    },

    onScroll() {
      // This is a hack to force mobile Safari to re-render the background on scroll.
      // https://www.bram.us/2019/10/24/pure-css-scroll-shadows-vertical-horizontal suggests a repaint can be forced
      // by setting the value of a custom property onScroll but I found I had to apply a style, query a dimensions
      // related proprty, and then undo the style so it can be re-applied later. This is bound to have a performance
      // penalty, but we don't have much choice.
      if (
        this.scrollable &&
        CSS.supports('-webkit-overflow-scrolling: touch')
      ) {
        this.$el.style.WebkitTransform = 'rotateZ(0deg)';
        // eslint-disable-next-line no-unused-expressions
        this.$el.offsetHeight;
        this.$el.style.WebkitTransform = 'none';
      }
    },
  }));
});
