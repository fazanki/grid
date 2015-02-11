'use strict';

/**
 * @ngdoc function
 * @name
 * @description
 * # SeriveRegisty
 * Controller of the appServiceRegirty
 */
angular.module('appServiceRegirty')
  .controller('GridCtrl', function ($scope, GridSerivce) {

    $scope.fields = ['ossName', 'region', 'territory', 'datacenter', 'businessScopes', 'realm', 'status'];

    GridSerivce.getGridItems().success(function(data){
      $scope.services = data;
    });

    $scope.sort = function(field) {
      $scope.sort.field = field;
      $scope.sort.order = !$scope.sort.order;
    };

    $scope.sort.field = 'ossName';
    $scope.sort.order = false;

    // ComputeService.getLocations().success(function(data){
    //   // $scope.treedata = data;
    // });


    // ComputeService.getLocations().success(function(data){
    //    $scope.statuses = data;
    // });



    // /// scope funcitons
    // $scope.remove = function (test) {
    //   delete $scope.attributes[0]
    // };

    // $scope.treedata = [
    //   { "label" : "User", "id" : "role1", "children" : [
    //     { "label" : "subUser1", "id" : "role11", "children" : [] },
    //     { "label" : "subUser2", "id" : "role12", "children" : [
    //       { "label" : "subUser2-1", "id" : "role121", "children" : [
    //         { "label" : "subUser2-1-1", "id" : "role1211", "children" : [] },
    //         { "label" : "subUser2-1-2", "id" : "role1212", "children" : [] }
    //       ]}
    //     ]}
    //   ]},
    //   { "label" : "Admin", "id" : "role2", "children" : [] },
    //   { "label" : "Guest", "id" : "role3", "children" : [] }
    // ];

  });
