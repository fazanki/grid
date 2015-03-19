angular.module('appServiceRegirty')
    .factory('NavSerivce', function ($http) {
      //var computeUrl = 'mock.compute.json';
      var navUrl = 'mock.menu.json';
      //     locations = 'mock.locations.json';
      //     statuses ='mock.statuses.json'
      return {

        getNavItems: function () {
            return $http.get(navUrl);
        }
      //   getLocations: function() {
      //       return $http.get(locations);
      //   },

      //   getLocations: function() {
      //       return $http.get(statuses);
      //   }

      };
    });