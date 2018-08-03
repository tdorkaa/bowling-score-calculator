const bowlingScoreCalculator = require('./bowling-score-calculator');

describe('bowlingScoreCalculator', function() {

    context('spare tests', function(){
        it('should not throw exception', function () {
            expect(bowlingScoreCalculator([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.not.throw;
        });

        it('should return 0 in case all the frames are 0', function () {
            expect(bowlingScoreCalculator([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(0);
        });

        it('should return 1 when the first roll is 1 and all the other are 0', function () {
            expect(bowlingScoreCalculator([[1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(1);
        });

        it('should return 5 when the first roll is 1, the second is 4 and all the other are 0', function () {
            expect(bowlingScoreCalculator([[1, 4], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(5);
        });

        it('should return 13 when the first roll is 1, the second is 4, third is 6 and forth is 2 and all the other are 0', function () {
            expect(bowlingScoreCalculator([[1, 4], [6, 2], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(13);
        });
    });

    context('spare tests', function(){
        it('should return correct result when second roll is spare', function () {
          expect(bowlingScoreCalculator([[1, "/"], [6, 2], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(24);
        });

        it('should return correct result when the last roll in the 10th frame is spare', function () {
          expect(bowlingScoreCalculator([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [5, '/', 5]])).to.equal(15);
        });

        it('should return correct result when spare is followed by 0 roll', function () {
          expect(bowlingScoreCalculator([[0, "/"], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(10);
        });

        it('should return correct result when spare is followed by a strike', function () {
          expect(bowlingScoreCalculator([[0, "/"], ["X"], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(30);
        });

        it('should return correct result when in the last frame spare is followed by a strike', function () {
          expect(bowlingScoreCalculator([[0, 0], [0,0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [5, "/", "X"]])).to.equal(20);
        });

    });

    context('strike tests', function(){
        it('should return correct result when strike is followed by two rolls', function () {
            expect(bowlingScoreCalculator([["X"], [4, 5], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(28);
        });

        it('should return correct result when the last frame is a strike and it is followed by two rolls', function () {
            expect(bowlingScoreCalculator([[0,0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ["X", 2, 2]])).to.equal(14);
        });

        it('should return correct result when a strike is followed by non-bonus roll and a spare', function () {
            expect(bowlingScoreCalculator([["X"], [5, "/"], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(30);
        });

        it('should return correct result when a strike is followed by a strike', function () {
            expect(bowlingScoreCalculator([["X"], ["X"], [4, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(42);
        });

        it('should return correct result when a strike is followed by a strike', function () {
            expect(bowlingScoreCalculator([["X"], ["X"], ["X"], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(60);
        });

        it('should return correct result when a strike is in the 9th frame followed by a strike', function () {
            expect(bowlingScoreCalculator([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ["X"], ["X", "X", "X"]])).to.equal(60);
        });

        it('should return correct result when a strike is in the 9th frame followed by a spare', function () {
            expect(bowlingScoreCalculator([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ["X"], [5, "/", 2]])).to.equal(32);
        });

        it('should return correct result when the last frame is a strike and it is followed by two rolls', function () {
          expect(bowlingScoreCalculator([[0,0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ["X", "X", 2]])).to.equal(22);
        });

        it('should return correct result when the last frame is a strike and it is followed by two strikes', function () {
          expect(bowlingScoreCalculator([[0,0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ["X", "X", "X"]])).to.equal(30);
        });

        it('should return correct result when the last frame is a strike and it is followed by spare', function () {
          expect(bowlingScoreCalculator([[0,0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ["X", 2, "/"]])).to.equal(20);
        });

        it('should return correct result when the last frame is a strike and it is followed by spare', function () {
          expect(bowlingScoreCalculator([[0,0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ["X", 2, 2]])).to.equal(14);
        });
        //
        // it.only('should return correct result when all the frames are strikes', function () {
        //   expect(bowlingScoreCalculator([["X"], ["X"], ["X"], ["X"], ["X"], ["X"], ["X"], ["X"], ["X"], ["X"]])).to.equal(300);
        // });
    });

});