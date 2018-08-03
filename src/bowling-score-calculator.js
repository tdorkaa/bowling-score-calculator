function bowlingScoreCalculator(scoreSheet) {
    let result = 0;
    scoreSheet.forEach((frame, frameIndex) => result = result + getFrameResult(frame, scoreSheet, frameIndex));
    return result;
}

function getFrameResult(frame, scoreSheet, frameIndex) {
    const isSpare = frame[1] === "/";
    const maxPin = 10;
    const isLastFrame = frameIndex == 9;
    const isStrike = frame[0] === "X";

    if (isSpare){
        return  isLastFrame ? maxPin + getNumericValueOfRoll(frame[2]) : maxPin + getNumericValueOfRoll(scoreSheet[frameIndex+1][0]);
    }

    if (isStrike) {
        return isLastFrame ? maxPin + frame[1] + frame[2] : maxPin + getNumericValueOf(getNextFrame(frameIndex, scoreSheet));
    }

    return getNumericValueOf(frame);
}

function getNumericValueOfRoll(nextRoll) {
    return nextRoll === "X" ? 10 : nextRoll;
}
function getNumericValueOf(frame)
{
    return frame[0] + frame[1];
}

function getNextFrame(currentFrameIndex, scoreSheet)
{
    return scoreSheet[currentFrameIndex+1];
}

module.exports = bowlingScoreCalculator;
