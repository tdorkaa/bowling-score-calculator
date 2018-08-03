function bowlingScoreCalculator(scoreSheet) {
    let result = 0;
    scoreSheet.forEach((frame, frameIndex) => result = result + getFrameResult(frame, scoreSheet, frameIndex));
    return result;
}

function getFrameResult(frame, scoreSheet, frameIndex) {
    const isSpare = frame[1] === "/";
    const maxPin = 10;
    const isLastFrame = frameIndex === 9;
    const isStrike = frame[0] === "X";

    if (isSpare){
        let rollToAdd = isLastFrame ? frame[2] : scoreSheet[frameIndex+1][0];
        return  maxPin + getNumericValueOfRoll(rollToAdd);
    }

    if (isStrike) {
        return isLastFrame ? maxPin + frame[1] + frame[2] : maxPin + getNumericValueOfFrame(getNextFrame(frameIndex, scoreSheet));
    }

    return getNumericValueOfFrame(frame);
}

function getNumericValueOfRoll(roll) {
    return roll === "X" ? 10 : roll;
}
function getNumericValueOfFrame(frame)
{
    return frame[0] + frame[1];
}

function getNextFrame(currentFrameIndex, scoreSheet)
{
    return scoreSheet[currentFrameIndex+1];
}

module.exports = bowlingScoreCalculator;
