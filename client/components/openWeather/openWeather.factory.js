'use strict';

angular.module('weatherStation')
    .factory('openWeather', ['$q', '$http', function($q, $http) {

        var ids = [
            '2643743',
            '2643339',
            '2643123',
            '2655603'
        ];

        function Weather(data) {
            if (!data.weather) {
                data.weather = [{
                    main: '',
                    icon: ''
                }];
            }
            if (!data.main) {
                data.main = {};
            }
            this.city = data.name || '';
            this.location = data.coord || {
                lat: '',
                lon: ''
            };
            this.currentCondition = data.weather[0].main || '';
            this.icon = data.weather[0].icon || '';
            this.temp = data.main.temp || '';
            this.tempMax = data.main.temp_max || '';
            this.tempMin = data.main.temp_min || '';
            this.pressure = data.main.pressure || '';
            this.humidity = data.main.humidity || '';
        }

        return {
            all: function() {

                var deffered = $q.defer();
                $http.get('http://api.openweathermap.org/data/2.5/group?id=' + ids + '&units=metric')
                    .success(function(data) {
                        var res = [];
                        data.list.forEach(function(d) {
                            if (d) {
                                var item = new Weather(d);
                                res.push(item)
                            }
                        });
                        deffered.resolve(res);
                    })
                    .error(function(error) {
                        deffered.reject(error);
                    });

                return deffered.promise;

            }
        };
    }]);