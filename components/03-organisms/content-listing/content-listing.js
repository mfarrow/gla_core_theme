(function contentListing($$, Drupal) {
  Drupal.behaviors.glaContentListing = {
    attach(context) {
      $$(
        once('gla-core-theme-content-listing', '[data-content-listing]'),
        context,
      ).each(function eachContentListing() {
        // Add an anchor to each link to act as a jump link and scroll the
        // page back down to the content listing component. This relies on
        // the component having the correct data attributes and an ID.
        const $pagerLinks = $$(this).find('[data-pager] li a');
        const id = $$(this).attr('id');

        $pagerLinks.each(function rewriteHrefs() {
          $$(this).attr('href', `${$$(this).attr('href')}#${id}`);
        });
      });
    },
  };
})(Cash, Drupal);
