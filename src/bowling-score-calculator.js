function bowlingScoreCalculator(scoreSheet) {
    let result = 0;
    scoreSheet.forEach((frame) => result = result + frame[0] + frame[1]);
    return result;
}

module.exports = bowlingScoreCalculator;
