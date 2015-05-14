'use strict';

describe('openWeather Factory', function() {
    var openWeather, $httpBackend, mockResponse;

    beforeEach(module('weatherStation', 'mockData'));

    it('should be defined', function() {

        inject(function(_openWeather_, _$httpBackend_, _mockResponse_) {
            openWeather = _openWeather_;
            $httpBackend = _$httpBackend_;
            mockResponse = _mockResponse_;
        })

        expect(openWeather).toBeDefined();
    });

    describe('openWeather.all', function() {

        it('should return data with the requested properties', function() {
            var ids = [
                '2643743',
                '2643339',
                '2643123',
                '2655603'
            ];

            $httpBackend
                .expectGET('http://api.openweathermap.org/data/2.5/group?id=' + ids + '&units=metric')
                .respond(200, mockResponse);

            openWeather
                .all()
                .then(function(data) {
                    expect(data).toContain({
                        city: 'Moscow',
                        location: {
                            lon: 37.62,
                            lat: 55.75
                        },
                        currentCondition: 'Clouds',
                        icon: '04n',
                        temp: 19.39,
                        tempMax: 19.555,
                        tempMin: 19.222,
                        pressure: 998.76,
                        humidity: 35
                    })
                    expect(data).toContain({
                        city: '',
                        location: {
                            lon: '',
                            lat: ''
                        },
                        currentCondition: '',
                        icon: '',
                        temp: '',
                        tempMax: '',
                        tempMin: '',
                        pressure: '',
                        humidity: ''
                    });
                });

            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();

        });
    });
});