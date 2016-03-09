angular
  .module('birdsEyeView', ['ngAnimate', 'ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5mode(true);

  });
