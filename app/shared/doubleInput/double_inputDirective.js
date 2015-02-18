angular.module('appServiceRegirty')

  .directive('popover', function($compile, $window) {

    var createList = function(listItems) {
      var $ul = $('<ul />');

      $.each(listItems, function(i, data) {
        $ul.append(
          $('<li />').text(data.name),
          $('<a />').attr({'href':'#'}).text('edit')
        );
      });
      $ul.append(
          $('<span />', {'class': 'glyphicon glyphicon-remove'}).attr({'ng-click':'remove()'})
       );
      return $ul;
    };

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

        if ( attrs.listitems !== undefined ) {
          var evalObject  = JSON.parse(attrs.listitems),
              tplListEdit = createList(evalObject);
         }



        if (fieldtype === "select") {
          content = function () {
            return $compile(tplSelect)(scope);
          };
        } else if (fieldtype === "editList") {
          content = function() {
            return $compile(tplListEdit)(scope);
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
          content     : content,
          'max-width': '100%'
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