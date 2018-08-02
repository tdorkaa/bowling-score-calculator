function bowlingScoreCalculator(scoreSheet) {
    let result = 0;
    scoreSheet.forEach((frame, frameIndex) => result = result + getFrameResult(frame, scoreSheet, frameIndex));
    return result;
}

function getFrameResult(frame, scoreSheet, frameIndex) {
    const isSpare = frame[1] === "/";
    const maxPin = 10;
    const isLastFrame = frameIndex;
    const isStrike = frame[0] === "X";

    if (isSpare){
        return  isLastFrame ? maxPin + frame[2] : maxPin + scoreSheet[frameIndex+1][0]
    }

    if (isStrike) {
        return maxPin;
    }

    return frame[0] + frame[1];
}

module.exports = bowlingScoreCalculator;
