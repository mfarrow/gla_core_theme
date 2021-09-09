(function contentListing($, Drupal) {
  Drupal.behaviors.glaContentListing = {
    attach(context) {
      $('[data-content-listing]', context)
        .once('gla-core-theme-content-listing')
        .each(function eachContentListing() {
          const $pagerLinks = $(this).find('[data-pager] li a');
          const id = $(this).attr('id');

          $pagerLinks.each(function rewriteHrefs() {
            $(this).attr('href', `${$(this).attr('href')}#${id}`);
          });
        });
    },
  };
})(jQuery, Drupal);
