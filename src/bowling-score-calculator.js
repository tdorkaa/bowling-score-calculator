const maxPin = 10;

function bowlingScoreCalculator(scoreSheet) {
    let result = 0;
    scoreSheet.forEach((frame, frameIndex) => result = result + getFrameResult(frame, scoreSheet, frameIndex));
    return result;
}

function getFrameResult(frame, scoreSheet, frameIndex) {
    const isLastFrame = frameIndex === 9;

    if (isSpare(frame[1])){
        let rollToAdd = isLastFrame ? frame[2] : scoreSheet[frameIndex+1][0];
        return  maxPin + getNumericValueOfRoll(rollToAdd);
    }

    if (isStrike(frame[0])) {
        if(isLastFrame) {
            return maxPin + getNumericValueOfRoll(frame[1]) + getNumericValueOfRoll(frame[2]);
        }
        let nextFrame = getNextFrame(frameIndex, scoreSheet);
        if(isStrike(nextFrame[0])) {
            if(frameIndex === 8) {
                return maxPin + getNumericValueOfRoll(nextFrame[0]) + getNumericValueOfRoll(nextFrame[1]);
            }
            let nextNextFrame = getNextFrame(frameIndex+1, scoreSheet);
            return maxPin + maxPin + getNumericValueOfRoll(nextNextFrame[0]);
        } else {
            return maxPin + getNumericValueOfFrame(nextFrame);
        }
    }

    return getNumericValueOfFrame(frame);
}

function isSpare(roll) {
    return roll === "/"
}

function isStrike(roll) {
    return roll === "X";
}

function getNumericValueOfRoll(roll) {
    return isStrike(roll) ? maxPin : roll;
}
function getNumericValueOfFrame(frame)
{
    return isSpare(frame[1]) ? maxPin : frame[0] + frame[1];
}

function getNextFrame(currentFrameIndex, scoreSheet)
{
    return scoreSheet[currentFrameIndex+1];
}

module.exports = bowlingScoreCalculator;
