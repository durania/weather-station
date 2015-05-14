'use strict'
angular.module('mockData', [])
    .value('mockResponse', {
        cnt: 2,
        list: [{
            coord: {
                lon: 37.62,
                lat: 55.75
            },
            sys: {
                message: 0.0121,
                country: "RU",
                sunrise: 1431480059,
                sunset: 1431538246
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
            }],
            main: {
                temp: 19.39,
                temp_min: 19.222,
                temp_max: 19.555,
                pressure: 998.76,
                sea_level: 1018.26,
                grnd_level: 998.76,
                humidity: 35
            },
            wind: {
                speed: 5.5,
                deg: 191
            },
            clouds: {
                all: 92
            },
            dt: 1431556018,
            id: 524901,
            name: "Moscow"
        }, {}]
    });