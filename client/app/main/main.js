'use strict';

angular.module('weatherStation')
    .config(function($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            });
    });