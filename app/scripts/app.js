'use strict';

angular.module('britTrialNgApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/brit1', {
        templateUrl: 'views/brit1.html',
        controller: 'MainCtrl'
      })
      .when('/sights', {
        templateUrl: 'views/sights.html',
        controller: 'MainCtrl'
      })
      .when('/tipsfromlocals', {
        templateUrl: 'views/tipsfromlocals.html',
        controller: 'MainCtrl'
      })
      .when('/indexprac', {
        templateUrl: 'views/indexprac.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
