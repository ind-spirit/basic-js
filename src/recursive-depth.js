const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr, depth) {
        console.log(arr, depth);
        if (depth === undefined)
            depth = 1;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                arr = arr.flat();
                depth++;
                return this.calculateDepth(arr, depth);
            }
        }
        return depth;
    }
};