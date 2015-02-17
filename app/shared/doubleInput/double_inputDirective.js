angular.module('appServiceRegirty')

  .directive('popover', function($compile, $window) {


    return {
      restrict: 'EAC',

      link: function(scope, elem, attrs) {
        var content,
            fieldtype = attrs.fieldtype,
            tplInput  = $('<div />').append(
                          $('<input/>').attr({value: attrs.fieldname, type: 'text', id: 'test', name: 'test'}),
                          $('<input/>').attr({'ng-click':'onClick()', value: attrs.savename, type: 'submit', class: 'btn btn-primary'}),
                          $('<span />', {'class': 'glyphicon glyphicon-remove'}).attr({'ng-click':'remove()'})
                        ),
            tplSelect =   ' <ui-select on-select="refresh($item, $model)" ng-model="selectedListItems[key].selected" theme="bootstrap" reset-search-input="false">' +
                          '   <ui-select-match placeholder="Search"> ' +
                          '      {{ $select.selected.name }} ' +
                          '   </ui-select-match> ' +
                          '   <ui-select-choices repeat="list in value[field] | filter: $select.search">' +
                          '      {{ list.name }}' +
                          '   </ui-select-choices>' +
                          '  </ui-select>' +
                          '  <span class="glyphicon glyphicon-remove" ng-click="remove()"> </span>';


        if (fieldtype === "select") {
          content = function () {
            return $compile(tplSelect)(scope);
          };
        } else {
          content = function() {
            return $compile(tplInput)(scope);
          };
        }

        elem.popover({
          trigger     : 'click',
          placement   : 'top',
          html        : true,
          self        : this,
          container   : 'body',
          content     : content
        });

        scope.onClick = function() {
          elem.popover('hide');
        };

        scope.remove = function() {
           elem.popover('hide');
        };

        scope.refresh = function(i, m) {
           elem.popover('hide');
           console.log(i + m);
        };

        var w = angular.element($window);
        scope.getWindowDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };

        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            elem.popover('hide');
        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });

      }
    };
});