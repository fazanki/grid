'use strict';

/**
 * @ngdoc function
 * @name
 * @description
 * # SeriveRegisty
 * Controller of the appServiceRegirty
 */
angular.module('appServiceRegirty')
  .controller('GridCtrl', function ($scope, GridSerivce, $location) {

    $scope.isDisabled = true;
    $scope.fields = ['ossName', 'region', 'territory', 'datacenter', 'businessScopes', 'realm', 'status', 'listSelectItems', 'listEditItems'];

    GridSerivce.getGridItems().success(function(data){
      $scope.services = data;
      $scope.listItems = data.listItem;
    });

    $scope.selectedListItems = {};

    $scope.sort = function(field) {
      $scope.sort.field = field;
      $scope.sort.order = !$scope.sort.order;
    };

    $scope.focused = function(service) {
      $scope.editUrl = service;
      $scope.isDisabled = false;
    };

    $scope.blured = function() {
      $scope.isDisabled = true;
    };

    $scope.edit = function(service) {
      $location.url($scope.editUrl);
    };

    $scope.onClick = function() {
      console.log('clicked');
    };

    $scope.sort.field = 'ossName';
    $scope.sort.order = false;

  });
