var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('should set state to starter and countdown', (done) => {
            // call counstdown method
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout( () => {
                expect(countdown.state.count).toBe(9);
                // mocha: test is done
                done();
            }, 1001);
        });

        it('should never set count less than zero', (done) => {
            // call counstdown method
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);

            setTimeout( () => {
                expect(countdown.state.count).toBe(0);
                // mocha: test is done
                done();
            }, 3001);
        });
    });
});