document.addEventListener('alpine:init', () => {
  Alpine.data('scrollableTable', () => ({
    scrollableRight: false,
    scrollableLeft: false,

    // Make sure classes is a function not just an object, otherwise Alpine
    // won't make it reactive.
    get classes() {
      return {
        'is-scrollable-right': this.scrollableRight,
      };
    },

    init() {
      this.scrollableRight =
        this.$refs.scroller.scrollWidth > this.$refs.scroller.clientWidth;
      this.scrollableLeft =
        this.$refs.scroller.scrollWidth < this.$refs.scroller.clientWidth;

      // Work out the height of the table, ignoring the caption element within the table element.
      let theadHeight = 0;
      let tbodyHeight = 0;
      if (this.$el.querySelector('thead')) {
        theadHeight = this.$el.querySelector('thead').clientHeight;
      }
      if (this.$el.querySelector('tbody')) {
        tbodyHeight = this.$el.querySelector('tbody').clientHeight;
      }

      // Set the height of the table head and or body as a custom property so we can style our
      // scroll affordances to cover the table body and header but not the caption.
      this.$el.style.setProperty(
        '--scrollable-table--table-height',
        `${tbodyHeight + theadHeight}px`,
      );

      // We also need to know the height of the scrollbar (if one is present) so we can set up
      // our CSS to not show a scroll affordance over the scrollbar.
      const scrollbarHeight =
        this.$refs.scroller.offsetHeight - this.$refs.scroller.clientHeight;
      this.$el.style.setProperty(
        '--scrollable-table--scrollbar-height',
        `${scrollbarHeight}px`,
      );
    },

    onScroll() {
      // When the user scrolls, check if they can scroll left or right.
      this.scrollableRight =
        this.$refs.scroller.scrollLeft !==
        this.$refs.scroller.scrollWidth - this.$refs.scroller.clientWidth;

      this.scrollableLeft = this.$refs.scroller.scrollLeft > 1;
    },
  }));
});
