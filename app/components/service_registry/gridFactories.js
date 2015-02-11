angular.module('appServiceRegirty')
    .factory('GridSerivce', function ($http) {
      //var computeUrl = 'mock.compute.json';
      var computeUrl = 'mock.compute.f.json';
      //     locations = 'mock.locations.json';
      //     statuses ='mock.statuses.json'
      return {

        getGridItems: function () {
            return $http.get(computeUrl);
        }
      //   getLocations: function() {
      //       return $http.get(locations);
      //   },

      //   getLocations: function() {
      //       return $http.get(statuses);
      //   }

      };
    });