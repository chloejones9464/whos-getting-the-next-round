const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const game = require('../script.js');
// import { describe, expect, test, jest } from '@jest/globals';



describe('playWinnerSound', () => {
    let originalIsMuted;
    let mockPlay;

    beforeEach(() => {
        // Create a new JSDOM instance for each test
        const dom = new JSDOM(`<!DOCTYPE html><html><body>
            <input id="playerName"></input>
            <div id="mainMenu"></div>
            </body></html>`);
        global.document = dom.window.document;
        // Save the original isMuted value and mock winnerNoise.play
        originalIsMuted = game.isMuted;
        mockPlay = jest.fn();
        game.winnerNoise.play = mockPlay;
        mockAudio = jest.fn();
        backgroundNoise = mockAudio;
        game.backgroundNoise = mockAudio;
    });

    afterEach(() => {
        // Restore the original isMuted value
        game.isMuted = originalIsMuted;
    });

    test('should play winnerNoise when isMuted is false', () => {
        game.isMuted = false;
        game.playWinnerSound();
        expect(mockPlay).toHaveBeenCalled();
    });

    test('should not play winnerNoise when isMuted is true', () => {
        game.isMuted = true;
        game.playWinnerSound();
        expect(mockPlay).not.toHaveBeenCalled();
    });
});
