'use strict';

/**
 * @ngdoc function
 * @name
 * @description
 * # SeriveRegisty
 * Controller of the appServiceRegirty
 */
angular.module('appServiceRegirty')
  .controller('SeriveRegistyCtrl', function ($scope, ComputeService) {

    $scope.realmselected = {};
    $scope.statusesselected = {}

    // RESTfull service call
    ComputeService.getOssLocations().success(function(data){
      $scope.attributes = data.ossLocationAttributes.attribute;
      $scope.pricefactors = data.ossLocationPrices.price;
      $scope.businessscopes = data.businessScopes.businessScope;
      $scope.realm = data.realm;

      $scope.message = data.message;
    });

    ComputeService.getLocations().success(function(data){
      // $scope.treedata = data;
    });


    ComputeService.getLocations().success(function(data){
       $scope.statuses = data;
    });



    /// scope funcitons
    $scope.remove = function (test) {
      delete $scope.attributes[0]
    };

    $scope.treedata = [
      { "label" : "User", "id" : "role1", "children" : [
        { "label" : "subUser1", "id" : "role11", "children" : [] },
        { "label" : "subUser2", "id" : "role12", "children" : [
          { "label" : "subUser2-1", "id" : "role121", "children" : [
            { "label" : "subUser2-1-1", "id" : "role1211", "children" : [] },
            { "label" : "subUser2-1-2", "id" : "role1212", "children" : [] }
          ]}
        ]}
      ]},
      { "label" : "Admin", "id" : "role2", "children" : [] },
      { "label" : "Guest", "id" : "role3", "children" : [] }
    ];

  });
