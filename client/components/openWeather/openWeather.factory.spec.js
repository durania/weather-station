'use strict';

describe('openWeather Factory', function() {

    beforeEach(module('weatherStation'));
	
	var openWeather;
    
    beforeEach(inject(['openWeather', function(_openWeather_) {
        openWeather = _openWeather_;
    }]));

    it('should be defined', function() {
        expect(openWeather).toBeDefined();
    });

});