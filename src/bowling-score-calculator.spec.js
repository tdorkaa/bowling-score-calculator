const bowlingScoreCalculator = require('./bowling-score-calculator');

describe('bowlingScoreCalculator', function() {
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