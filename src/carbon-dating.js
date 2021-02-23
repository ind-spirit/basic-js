const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(inp) {
    let num = 0,
        k,
        rounded;

    if (inp !== undefined) {
        if (typeof inp === "string") {

            num = parseInt(inp, 10);
            if (parseInt(inp, 10) !== 'NaN' && parseInt(inp, 10) > 0 && parseInt(inp, 10) < 15) {

                k = 0.693 / HALF_LIFE_PERIOD;
                num = Math.log2(MODERN_ACTIVITY / inp) / k;
                rounded = Math.ceil(num);

                return rounded;
            } else return false;
        } else return false;
    } else return false;

};