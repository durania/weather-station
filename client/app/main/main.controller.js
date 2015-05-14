'use strict';

angular.module('weatherStation')
    .controller('MainCtrl', ['$scope', 'openWeather', function($scope, openWeather) {
        $scope.list = [];
        openWeather.all()
            .then(function(data) {
                $scope.list = data;
            });
    }]);