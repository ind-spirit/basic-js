const CustomError = require("../extensions/custom-error");

function repeat(str, options) {
    let string = str,
        separator;
    if (options.separator === undefined) {
        separator = '+'
    } else {
        separator = options.separator;
    }
    for (let i = 1; i < options.repeatTimes; i++) {
        str += separator;
        str += string;
        console.log(str, i);
    }
    return str;
}

function add(str, options) {
    console.log(options.additionRepeatTimes, options.additionSeparator);
    let repTimes, separator, res = [];
    if (options.additionRepeatTimes === undefined) {
        repTimes = 1;
    } else {
        repTimes = options.additionRepeatTimes;
    }
    if (options.additionSeparator === undefined) {
        separator = '|';
    } else {
        separator = options.additionSeparator;
    }
    for (let i = 0; i < repTimes; i++) {
        res.push(options.addition);
        console.log(str, i);
    }
    str += res.join(separator);
    console.log(str, '--leave add--');
    return str;
}

module.exports = function repeater(str, options) {
    if (options.addition !== undefined) {
        console.log('isAddition');
        str = add(str, options);
    }
    if (options.repeatTimes !== undefined) {
      console.log('==repeat times==');
        str = repeat(str, options);
    }
    console.log('finish');
    console.log(str);
    return str;
};
