 const CustomError = require("../extensions/custom-error");

 module.exports = function countCats(arr) {
    let ears = '^^',
        buf = [],
        j,
        i,
        count = 0;

    for (i = 0; i < arr.length; i++) {
        buf = arr[i];
        for (j = 0; j < buf.length; j++) {
            if (buf[j] == ears) {
                count++;
            }
        }
    }
    return count;
}



