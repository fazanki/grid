angular.module('appServiceRegirty')
  .directive('doubleField', function ($timeout) {
    return {
      restrict: 'EA',
      templateUrl: '/shared/doubleInput/double_inputView.html',
      replace: true,
      scope: {
        record: '=',
        attrkey: '@',
        attrvalue: '@',
        fielda: '@',
        fieldv: '@'
      },

      require: '^form',

      link: function ($scope, element, attrs, form) {

  //        var test = $scope.$eval(attrs.atKey);
          //console.log(attrs.$attr.attrkey);

          // $scope.$on('record:invalid', function () {
          //   $scope[$scope.field].$setDirty();
          // });

          // $scope.types = FieldTypes

          $scope.add = function () {
            alert('added');
          }

          // $scope.blurUpdate = function () {
          //     console.log('valid= ' + form.$valid);
          //     if ($scope.live !== 'false' && form.$valid) {
          //         $scope.record.$update(function (updatedRecord) {
          //           $scope.record = updatedRecord;
          //         });
          //     }
          // };

          // var saveTimeout;
          // $scope.update = function () {
          //     $timeout.cancel(saveTimeout);
          //     saveTimeout = $timeout($scope.blurUpdate, 1000);
          // };
        }
      };

  });