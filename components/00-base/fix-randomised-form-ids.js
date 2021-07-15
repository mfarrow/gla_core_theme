(function fixRandomisedFormIds(Drupal) {
  // See https://www.drupal.org/project/drupal/issues/1852090#comment-13624394.
  Drupal.behaviors.glaFixRandomisedFormIds = {
    attach(context) {
      // Update form element labels for elements that have had their ID
      // altered by _gla_core_theme_prevent_duplicate_form_element_ids().
      const randomisedInputs = context.querySelectorAll("[id$='--randomised']");
      randomisedInputs.forEach((input) => {
        const { id } = input;
        const closestFormItem = input.closest('.js-form-item');

        if (closestFormItem) {
          const inputLabel = closestFormItem.querySelector('label');
          inputLabel.setAttribute('for', id);
        }
      });
    },
  };
})(Drupal);
