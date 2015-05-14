'use strict';

describe("MainCtrl", function() {
    var scope, openWeatherMock, controller;

    beforeEach(module("weatherStation"));

    describe("when initialized", function() {

        it("should call the openWeather.all()", function() {
            openWeatherMock = jasmine.createSpyObj("openWeather", ["all"]);

            inject(function($controller, $rootScope, $q) {
                scope = $rootScope.$new();
                controller = $controller;

                openWeatherMock.all.andReturn($q.when([{
                    city: 'foo'
                }, {
                    city: 'bar'
                }]));
            });

            controller("MainCtrl", {
                $scope: scope,
                openWeather: openWeatherMock
            });

            scope.$digest();

            expect(openWeatherMock.all).toHaveBeenCalled();
        });

        describe('scope.list', function() {

            it('should containing a list of objects', function() {
                expect(scope.list).toContain({
                    city: 'foo'
                });
                expect(scope.list).toContain({
                    city: 'bar'
                });
                expect(scope.list.length).toEqual(2);
            });
        });
    });
});