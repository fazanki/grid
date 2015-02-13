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

  })

  .directive('popover', function($compile) {


    var hideAllPopovers = function() {
       $('.popover-content').each(function() {
            $(this).remove()
        });
    };

    return {
      restrict: 'EAC',

      link: function(scope, elem, attrs) {

        elem.popover(
          {
            trigger: 'click',
            'placement': 'top',
            html : true,
            self : this,
            'container': 'body',
            content: function() {
              return $compile($('<div />').append(
                $('<input/>').attr({value: attrs.fieldname, type: 'text', id: 'test', name: 'test'}),
                $('<input/>').attr({'ng-click':'onClick()', value: attrs.savename, type: 'submit', class: 'btn btn-primary'}),
                $('<span />', {'class': 'glyphicon glyphicon-remove'}).attr({'ng-click':'remove()'})
              ))(scope);

            }
          }
        )

        scope.onClick = function() {
          elem.popover('hide');
          console.log('hello');
        };

        scope.remove = function() {
           elem.popover('hide');
        }
      }
    };


});