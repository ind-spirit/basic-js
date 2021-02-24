const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
    let i = 0,
        res = [],
        n = 0;
    if (!Array.isArray(arr)) {
        return false;
    } else {
        for (i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string') {
                arr[i] = arr[i].split('').filter((item) => item != ' ');
                res[n] = arr[i][0];
                n++;
            }

        }
    }
    res = res.join('').toUpperCase().split('').sort().join('');
    return res;
};