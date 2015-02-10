angular.module('appServiceRegirty')
    .factory('ComputeService', function ($http) {
      var ossLocations = 'mock.computesevice.json';
          locations = 'mock.locations.json';
          statuses ='mock.statuses.json'
      return {

        getOssLocations: function () {
            return $http.get(ossLocations);
        },
        getLocations: function() {
            return $http.get(locations);
        },

        getLocations: function() {
            return $http.get(statuses);
        }

      };
    });