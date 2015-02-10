'use strict';
// the describe keyword is used to define a test suite (group of tests)
describe('double-field directive', function() {

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

    describe('initialisation', function() {
        // before each test in this block, generates a fresh directive

        beforeEach(function() {
            compileDirective();
        });

        it('returns list of resources', inject(function(gridSerive){ //parameter name = service name
           // expect( myService.one ).toEqual(1);
        }))
        // a single test example, check the produced DOM
        it('should contain column header', function() {
          // console.log(elm.find('input'));
          //   expect(elm.find('input').length).toEqual(2);
        });
        it('should have at leaset name displayed', function() {
          // console.log(elm.find('input'));
          //   expect(elm.find('input').length).toEqual(2);
        });
        it('should display list of items', function() {
          // console.log(elm.find('input'));
          //   expect(elm.find('input').length).toEqual(2);
        });
        it('it should have serarch/filter item', function() {
            // console.log(elm.find('button'));
            // expect(elm.find('button').length).toEqual(1);
        });
    });


    describe('event driven behaviour', function() {
        it('it should filter result', function() {
          // console.log(elm.find('input'));
          //   expect(elm.find('input').length).toEqual(2);
        });
        it('it should sort items', function() {
          // console.log(elm.find('input'));
          //   expect(elm.find('input').length).toEqual(2);
        });
    });

