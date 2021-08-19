// Mock Drupal behaviours and settings.
// Based on https://github.com/emulsify-ds/emulsify-drupal/blob/3.0.1/.storybook/_drupal.js.

window.Drupal = { behaviors: {} };
window.drupalSettings = window.drupalSettings || {};

((Drupal, drupalSettings) => {
  Drupal.throwError = (error) => {
    setTimeout(() => {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = (context, settings) => {
    context = context || document;
    settings = settings || drupalSettings;
    const { behaviors } = Drupal;

    Object.keys(behaviors).forEach((i) => {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };
})(Drupal, window.drupalSettings);
