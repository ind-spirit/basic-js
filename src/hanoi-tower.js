const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disks, speed) {
    let turns, seconds,
        res = {
            turns,
            seconds
        };
    res.turns = ((2 ** disks) - 1);
    res.seconds = Math.floor(res.turns / (speed / 3600));

    return res;
};