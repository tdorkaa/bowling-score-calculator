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
});