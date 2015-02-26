'use strict';

/**
 * @ngdoc overview
 * @name appServiceRegirty
 * @description
 * # appServiceRegirty
 *
 * Main module of the application.
 */
angular
  .module('appServiceRegirty', [
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.select',
    'angularTreeview',
    'angularUtils.directives.dirPagination'
  ])
  .config(function ($routeProvider , $locationProvider) {
    $routeProvider
      .when('/gridView', {
        templateUrl: 'components/service_registry/gridView.html',
        controller: 'GridCtrl'
      })

      .otherwise({
        redirectTo: '/gridView'
      });

      $locationProvider.html5Mode(true);
  });
