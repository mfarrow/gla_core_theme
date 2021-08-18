document.addEventListener('DOMContentLoaded', (event) => {
  const setScrollPaddingTopCssCustomProperty = () => {
    // This takes the value of `scroll-padding-top` on the `html` element (set by the Drupal admin toolbar and
    // eventually by our site header) and sets it as a CSS custom property so we can use it for positioning
    // sticky elements in a way that will always appear under any sticky headers.
    let { scrollPaddingTop } = window.getComputedStyle(
      document.documentElement,
    );

    // Have we got a numeric value, or is it 'auto'? If we can't parse the computed style into a number then we fall
    // back to 0px.
    if (Number.isNaN(Number.parseFloat(scrollPaddingTop))) {
      scrollPaddingTop = '0px';
    }

    // If the style already exists on the page let's remove it and re-create it with the new value.
    if (document.contains(document.getElementById('html-scroll-padding-top'))) {
      document.getElementById('html-scroll-padding-top').remove();
    }

    if (scrollPaddingTop) {
      document.head.insertAdjacentHTML(
        'beforeend',
        `<style id="html-scroll-padding-top">:root,::before,::after {--html-scroll-padding-top: ${scrollPaddingTop}}</style>`,
      );
    }
  };

  setScrollPaddingTopCssCustomProperty();

  window.addEventListener(
    'resize',
    Drupal.debounce(setScrollPaddingTopCssCustomProperty, 250),
  );

  // If jQuery is enabled (e.g. a user is logged in and Drupal has added jQuery) then we can listen for
  // scroll-padding-top changes coming from the Drupal toolbar. jQuery's event system isn't compatible
  // with vanilla JavaScript which is why we have to use jQuery for this.
  if (window.jQuery) {
    jQuery(document).on(
      'drupalViewportOffsetChange.toolbar',
      setScrollPaddingTopCssCustomProperty,
    );
  }
});
