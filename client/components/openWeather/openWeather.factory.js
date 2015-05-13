'use strict';

angular.module('weatherStation')
    .factory('openWeather', ['$q', '$http', function($q, $http) {

        var ids = [
            '2643743',
            '2643339',
            '2643123',
            '2655603'
        ];

        return {
            all: function() {

                var deffered = $q.defer();
                $http.get('http://api.openweathermap.org/data/2.5/group?id=' + ids + '&units=metric')
                    .success(function(data) {
                        deffered.resolve(data);
                    })
                    .error(function(error) {
                        deffered.reject(error);
                    });

                return deffered.promise;

            }

        };

    }]);