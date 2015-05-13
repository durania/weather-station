'use strict';

angular.module('weatherStation', [
        'ui.router'
    ])
    .config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }]);