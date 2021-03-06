(function() {
  'use strict';
  angular
    .module('formioApp')
    .config([
      'AppConfig',
      'FormioProvider',
      'FormioAuthProvider',
      'formioComponentsProvider',
      function(
        AppConfig,
        FormioProvider,
        FormioAuthProvider,
        formioComponentsProvider
      ) {
        FormioProvider.setAppUrl(AppConfig.appUrl);
        FormioProvider.setBaseUrl(AppConfig.apiUrl);
        FormioAuthProvider.setForceAuth(true);
        FormioAuthProvider.setStates('auth.login', 'home');
        FormioAuthProvider.register('login', 'user', 'login');

        // Add a new group to formioComponentsProvider.
        formioComponentsProvider.addGroup('custom', {title: 'Custom Components'});
      }
    ]);
})();
