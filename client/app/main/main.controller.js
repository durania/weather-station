'use strict';

angular.module('weatherStation')
    .controller('MainCtrl', ['$scope', 'openWeather', function($scope, openWeather) {
        $scope.error = null;
        $scope.isLoading = true;
        $scope.list = [];
        $scope.selected = null;

        openWeather.all()
            .then(function(data) {
                $scope.list = data;
            })
            .catch(function(err) {
                $scope.error = err;
            })
            .finally(function() {
                $scope.isLoading = false;
            });

        $scope.showDetails = function(selected) {
            $scope.selected = selected;
            $scope.list.forEach(function(item) {
                item.isActive = false;
                if (item.city === selected.city) {
                    item.isActive = true;
                }
            });
        };
    }]);