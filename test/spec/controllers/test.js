// 'use strict';

// describe('Controller: Serive Registy', function () {

//   // load the controller's module
//   beforeEach(module('appServiceRegirty'));

//   var MainCtrl,
//     scope;

//   // Initialize the controller and a mock scope
//   beforeEach(inject(function ($controller, $rootScope) {
//     scope = $rootScope.$new();
//     MainCtrl = $controller('SeriveRegistyCtrl', {
//       $scope: scope
//     });
//   }));

//   it('should attach a list of awesomeThings to the scope', function () {
//     expect(scope.awesomeThings.length).toBe(3);
//   });
// });

// // the describe keyword is used to define a test suite (group of tests)
// describe('rnStepper directive', function() {

//     // we declare some global vars to be used in the tests
//     var elm,        // our directive jqLite element
//         scope;      // the scope where our directive is inserted

//     // load the modules we want to test
//     beforeEach(module('revolunet.stepper'));

//     // before each test, creates a new fresh scope
//     // the inject function interest is to make use of the angularJS
//     // dependency injection to get some other services in our test
//     // here we need $rootScope to create a new scope
//     beforeEach(inject(function($rootScope, $compile) {
//         scope = $rootScope.$new();
//         scope.testModel = 42;
//     }));

//     function compileDirective(tpl) {
//         // function to compile a fresh directive with the given template, or a default one
//         // compile the tpl with the $rootScope created above
//         // wrap our directive inside a form to be able to test
//         // that our form integration works well (via ngModelController)
//         // our directive instance is then put in the global 'elm' variable for further tests
//         if (!tpl) tpl = '<div rn-stepper ng-model="testModel"></div></form>';
//         tpl = '<form name="form">' + tpl + '</tpl>';
//         // inject allows you to use AngularJS dependency injection
//         // to retrieve and use other services
//         inject(function($compile) {
//             var form = $compile(tpl)(scope);
//             elm = form.find('div');
//         });
//         // $digest is necessary to finalize the directive generation
//         scope.$digest();
//     }

//     describe('initialisation', function() {
//         // before each test in this block, generates a fresh directive
//         beforeEach(function() {
//             compileDirective();
//         });
//         // a single test example, check the produced DOM
//         it('should produce 2 buttons and a div', function() {
//             expect(elm.find('button').length).toEqual(2);
//             expect(elm.find('div').length).toEqual(1);
//         });
//         it('should check validity on init', function() {
//             expect(scope.form.$valid).toBeTruthy();
//         });
//     });

//     it('should update form validity initialy', function() {
//         // test with a min attribute that is out of bounds
//         // first set the min value
//         scope.testMin = 45;
//         // then produce our directive using it
//         compileDirective('<div rn-stepper min="testMin" ng-model="testModel"></div>');
//         // this should impact the form validity
//         expect(scope.form.$valid).toBeFalsy();
//     });
//  it('decrease button should be disabled when min reached', function() {
//         // test the initial button status
//         compileDirective('<div rn-stepper min="40" ng-model="testModel"></div>');
//         expect(elm.find('button').attr('disabled')).not.toBeDefined();
//         // update the scope model value
//         scope.testModel = 40;
//         // force model change propagation
//         scope.$digest();
//         // validate it has updated the button status
//         expect(elm.find('button').attr('disabled')).toEqual('disabled');
//     });
//     // and many others...
// });