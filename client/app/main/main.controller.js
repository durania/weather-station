'use strict';

angular.module('weatherStation')
    .controller('MainCtrl', ['$scope', 'openWeather', function($scope, openWeather) {
        $scope.list = [];
        openWeather.all()
            .then(function(data) {
                $scope.list = data;   
            });
        $scope.showDetails = function(selected) {
            $scope.list.forEach(function(item) {
                item.isActive = false;
                if (item.city === selected.city) {
                    item.isActive = true;
                };
            });
        };
    }]);