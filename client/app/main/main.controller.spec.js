'use strict';

describe('MainCtrl', function() {
    var scope, openWeatherMock, controller;

    beforeEach(module('weatherStation'));
    describe('when the server response without errors', function() {

        beforeEach(function() {
            openWeatherMock = jasmine.createSpyObj('openWeather', ['all']);

            inject(function($controller, $rootScope, $q) {
                scope = $rootScope.$new();
                controller = $controller;
                openWeatherMock.all.andReturn($q.when([{
                    city: 'foo'
                }, {
                    city: 'bar'
                }]));
            });

            controller('MainCtrl', {
                $scope: scope,
                openWeather: openWeatherMock
            });
        });

        describe('scope.isLoading', function() {
            describe('at the init process', function() {
                it('should be true', function() {
                    expect(scope.isLoading).toBeTruthy();
                });
            });
            describe('after a digest', function() {
                it('should be true', function() {
                    scope.$digest()
                    expect(scope.isLoading).toBeFalsy();
                });
            });
        });

        describe('openWeather.all()', function() {
            it('should have been called after digest', function() {
                scope.$digest()
                expect(openWeatherMock.all).toHaveBeenCalled();
            });
        });

        describe('scope.list', function() {
            it('should containing a list of objects', function() {
                scope.$digest()
                expect(scope.list).toContain({
                    city: 'foo'
                });
                expect(scope.list).toContain({
                    city: 'bar'
                });
                expect(scope.list.length).toEqual(2);
            });
        });

        describe('scope.showDetails()', function() {
            it('should make inactive all the items in the list but the one selected', function() {
                scope.$digest();
                scope.showDetails(scope.list[0]);

                expect(scope.list[0].isActive).toBeTruthy();
                expect(scope.list[1].isActive).toBeFalsy();
            });

        });
    });
    describe('when the server response with errors', function() {
        var error = {
            msg: 'An error occurred'
        }
        beforeEach(function() {
            openWeatherMock = jasmine.createSpyObj('openWeather', ['all']);

            inject(function($controller, $rootScope, $q) {
                scope = $rootScope.$new();
                controller = $controller;
                openWeatherMock.all.andReturn($q.reject(error));
            });

            controller('MainCtrl', {
                $scope: scope,
                openWeather: openWeatherMock
            });
        });
        it('should ', function() {
            expect(scope.error).toEqual(null)
            scope.$digest();
            expect(scope.error).toEqual(error)

        });
    });
});