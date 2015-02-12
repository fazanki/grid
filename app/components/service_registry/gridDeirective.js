angular.module('appServiceRegirty')
  .directive('popover', function() {
   return function(scope, elem) {
      elem.popover();
   }
});