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

  /**
   * Limits the invocations of a function in a given time frame.
   *
   * The debounce function wrapper should be used sparingly. One clear use case
   * is limiting the invocation of a callback attached to the window resize event.
   *
   * Before using the debounce function wrapper, consider first whether the
   * callback could be attached to an event that fires less frequently or if the
   * function can be written in such a way that it is only invoked under specific
   * conditions.
   *
   * @param {function} func
   *   The function to be invoked.
   * @param {number} wait
   *   The time period within which the callback function should only be
   *   invoked once. For example if the wait period is 250ms, then the callback
   *   will only be called at most 4 times per second.
   * @param {bool} immediate
   *   Whether we wait at the beginning or end to execute the function.
   *
   * @return {function}
   *   The debounced function.
   */
  Drupal.debounce = (func, wait, immediate) => {
    let timeout;
    let result;
    return (...args) => {
      const context = this;
      const later = () => {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
        }
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
      }
      return result;
    };
  };
})(Drupal, window.drupalSettings);
