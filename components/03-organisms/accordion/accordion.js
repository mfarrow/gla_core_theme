document.addEventListener('alpine:init', () => {
  Alpine.data('accordion', () => ({
    accordionId: null,
    params: null,
    // Use an array for the list of visible items in case in the future we want to
    // allow multiple items to be open at once.
    visible: [],
    init() {
      this.accordionId = this.$el.id;
      this.params = new URLSearchParams(window.location.search);

      // Does the URL contain any information on any open accordions?
      if (this.params.has(this.accordionId)) {
        this.visible = JSON.parse(this.params.get(this.accordionId));
      }

      this.$watch('visible', (value, oldValue) => {
        this.updateUrl(value, oldValue);
      });
    },
    isVisible(index) {
      // Is the index of the accordion item inside the array of visible items?
      return this.visible.includes(index);
    },
    updateUrl(value, oldValue) {
      if (value.length) {
        // Update the URL param to mention the expanded accordion item.
        this.params = new URLSearchParams(window.location.search);
        // Remove any previous param for this accordion.
        this.params.delete(this.accordionId);
        // Write a new param containing the index of the open accordion item.
        this.params.append(this.accordionId, JSON.stringify(this.visible));
      } else {
        // Remove the URL param entirely.
        this.params = new URLSearchParams(window.location.search);
        this.params.delete(this.accordionId);
      }

      // Update the URL with the new params.
      window.history.pushState(
        {},
        '',
        `?${this.params.toString()}${window.location.hash}`,
      );

      if (window.location.search === '') {
        // Remove any empty query strings.
        window.history.pushState(
          {},
          '',
          window.location.pathname + window.location.hash,
        );
      }
    },
    setVisible(index) {
      // Set the list of visible items to either include the index, or if it
      // already includes the index then set it to be empty.
      this.visible = !this.isVisible(index) ? [index] : [];
    },
  }));
});
