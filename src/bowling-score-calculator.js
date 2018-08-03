function bowlingScoreCalculator(scoreSheet) {
    let result = 0;
    scoreSheet.forEach((frame, frameIndex) => result = result + getFrameResult(frame, scoreSheet, frameIndex));
    return result;
}

function getFrameResult(frame, scoreSheet, frameIndex) {
    const maxPin = 10;
    const isLastFrame = frameIndex === 9;
    const isStrike = frame[0] === "X";

    if (isSpare(frame[1])){
        let rollToAdd = isLastFrame ? frame[2] : scoreSheet[frameIndex+1][0];
        return  maxPin + getNumericValueOfRoll(rollToAdd);
    }

    if (isStrike) {
        if(isLastFrame) {
            return maxPin + frame[1] + frame[2];
        }

        return maxPin + getNumericValueOfFrame(getNextFrame(frameIndex, scoreSheet));
    }

    return getNumericValueOfFrame(frame);
}

function isSpare(roll) {
    return roll === "/"
}

function getNumericValueOfRoll(roll) {
    return roll === "X" ? 10 : roll;
}
function getNumericValueOfFrame(frame)
{
    return isSpare(frame[1]) ? 10 : frame[0] + frame[1];
}

function getNextFrame(currentFrameIndex, scoreSheet)
{
    return scoreSheet[currentFrameIndex+1];
}

module.exports = bowlingScoreCalculator;
