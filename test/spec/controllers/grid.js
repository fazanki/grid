'use strict';
// the describe keyword is used to define a test suite (group of tests)
describe('grid service', function() {

    // we declare some global vars to be used in the tests
    var elm,        // our directive jqLite element
        scope;      // the scope where our directive is inserted

    // load the modules we want to test
    beforeEach(module('appServiceRegirty'));

    beforeEach(module('ngTemplates'));

    // before each test, creates a new fresh scope
    // the inject function interest is to make use of the angularJS
    // dependency injection to get some other services in our test
    // here we need $rootScope to create a new scope
    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        scope.testModel = 42;
    }));

    function compileDirective(tpl) {
        // function to compile a fresh directive with the given template, or a default one
        // compile the tpl with the $rootScope created above
        // wrap our directive inside a form to be able to test
        // that our form integration works well (via ngModelController)
        // our directive instance is then put in the global 'elm' variable for further tests
        if (!tpl) tpl = '<double-field record="" atKey="someValue" atValue="value" required="true" ></double-field>';
        tpl = '<form name="form">' + tpl + '</form>';
        // inject allows you to use AngularJS dependency injection
        // to retrieve and use other services
        inject(function($compile) {
            var form = $compile(tpl)(scope);
            elm = form;
        });
        // $digest is necessary to finalize the directive generation
        scope.$digest();
    }

    describe('grid factories', function() {
        // before each test in this block, generates a fresh directive

        // beforeEach(function() {
        //     compileDirective();
        // });

        it('can get an instance of Grid factory', inject(function(GridSerivce){ //parameter name = service name
            expect( GridSerivce ).toBeDefined();
        }));

        it('shoud define factory methods', inject(function(GridSerivce){ //parameter name = service name
            expect( GridSerivce.getGridItems ).toBeDefined();
            expect( GridSerivce.getGridItems ).toEqual(jasmine.any(Function));
        }));
    });

    describe('grid initialisation contoller', function() {
        it('should have a list of fields', inject(function($controller) {
            var scope = {},
                ctrl  = $controller('GridCtrl', {$scope:scope});
                expect(scope.fields.length).toBe(7);
        }));

        it('should have a sort fucntion', inject(function($controller) {
            var scope = {},
                ctrl  = $controller('GridCtrl', {$scope:scope});
                expect(scope.sort).toEqual(jasmine.any(Function));
        }));

        it('should have a focus fucntion', inject(function($controller) {
            var scope = {},
                ctrl  = $controller('GridCtrl', {$scope:scope});
                expect(scope.focused).toEqual(jasmine.any(Function));
        }));

        it('should have a blured fucntion', inject(function($controller) {
            var scope = {},
                ctrl  = $controller('GridCtrl', {$scope:scope});
                expect(scope.blured).toEqual(jasmine.any(Function));
        }));

        it('should have a edit fucntion', inject(function($controller) {
            var scope = {},
                ctrl  = $controller('GridCtrl', {$scope:scope});
                expect(scope.edit).toEqual(jasmine.any(Function));
        }));


        // it('should have at least one service displayed', function() {
        //     expect(elm.find('tr').length).toEqual(1);
        // });
        // it('should display list of items', function() {
        //    expect(elm.find('tr').length).toEqual(1);
        // });
        // it('it should have serarch/filter item', function() {
        //     console.log(elm.find('button'));
        //     expect(elm.find('.search').length).toEqual(1);
        // });
    });


     describe('pagination direcive', function() {
        beforeEach(function() {
            compileDirective('<dir-pagination-controls boundary-links="true" on-page-change="pageChangeHandler(newPageNumber)" template-url="/shared/pagination/dirPagination.tpl.html"></dir-pagination-controls>');
        });


        it('should produce 2 buttons and a div', function() {
            console.log(elm)
            expect(elm.find('ul').length).toEqual(1);
           // expect(elm.find('div').length).toEqual(1);
        });
        // it('should check validity on init', function() {
        //     expect(scope.form.$valid).toBeTruthy();
        // });
    });


    describe('event driven behaviour', function() {
        // it('it should filter result', function() {
        //   // console.log(elm.find('input'));
        //   //   expect(elm.find('input').length).toEqual(2);
        // });
        // it('it should sort items', function() {
        //   // console.log(elm.find('input'));
        //   //   expect(elm.find('input').length).toEqual(2);
        // });
    });

});