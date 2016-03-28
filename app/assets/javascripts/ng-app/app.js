(function(){
  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      });

    $urlRouterProvider.otherwise('/');

  }

  angular
    .module('birdsEyeView', ['ngAnimate', 'ui.router', 'templates'])
    .config(config);
})();
