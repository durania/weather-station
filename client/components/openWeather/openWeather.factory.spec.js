'use strict';

describe('openWeather Factory', function() {

    beforeEach(module('weatherStation'));

    var openWeather, $httpBackend;

    beforeEach(inject(['openWeather', '$httpBackend', function(_openWeather_, _$httpBackend_) {
        openWeather = _openWeather_;
        $httpBackend = _$httpBackend_;
    }]));

    it('should be defined', function() {
        expect(openWeather).toBeDefined();
    });

    describe('openWeather.all', function() {
        it('should be defined', function() {
            expect(openWeather.all).toBeDefined();
        });
        it('should return a promise wiht a json containing weather Data for all the cities', function() {
            var ids = [
                '2643743',
                '2643339',
                '2643123',
                '2655603'
            ];


            $httpBackend
                .expectGET('http://api.openweathermap.org/data/2.5/group?id=' + ids + '&units=metric')
                .respond(200, {
                    cnt: "4",
                    list: [1, 2, 3, 4]
                });


            openWeather
                .all()
                .then(function(data) {
                    expect(data).toEqual({
                        cnt: "4",
                        list: [1, 2, 3, 4]
                    })

                });

            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();

        });
    });
});