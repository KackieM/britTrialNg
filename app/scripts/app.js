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
      .when('/sight', {
        templateUrl: 'views/sight.html',
        controller: 'MainCtrl'
      })
      .when('/thegirls', {
        templateUrl: 'views/thegirls.html',
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
