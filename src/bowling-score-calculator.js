function bowlingScoreCalculator(scoreSheet) {
    let result = 0;
    scoreSheet.forEach((frame, frameIndex) => result = result + getFrameResult(frame, scoreSheet, frameIndex));
    return result;
}

function getFrameResult(frame, scoreSheet, frameIndex) {
    const isSpare = frame[1] === "/";
    const maxPin = 10;
    const isLastFrame = frameIndex;
    if(isLastFrame && isSpare) {
        return maxPin + frame[2];
    }
    if(isSpare) {
        return maxPin + scoreSheet[frameIndex+1][0];
    }
    return frame[0] + frame[1];
}

module.exports = bowlingScoreCalculator;
