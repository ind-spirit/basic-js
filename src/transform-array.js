const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
    let i, arr = array;
    if (arr instanceof Array && Array.isArray(arr)) {
        //let i, arr = array;
        //console.log('start', arr, arr.length)
        
        for (i = 0; i < arr.length; i++) {
          //console.log('i =',i)
            switch (arr[i]) {
                case '--discard-next':
                    if (i == arr.length - 1) {
                        arr.splice(i, 1);
                    } else {
                        arr.splice(i, 2);
                    }
                    i--;
                    //console.log(arr, arr.length)
                    break;
                case '--discard-prev':
                  //console.log('i =',i)
                    if (i == 0) {
                        arr.splice(i, 1);
                    } else {
                        arr.splice((i - 1), 2);
                    }
                    i--;
                    //console.log(arr, arr.length)
                    break;
                case '--double-next':
                    if (i == arr.length - 1) {
                        arr.splice(i, 1);
                    } else {
                        arr[i] = arr[i + 1];
                    }
                    i--;
                    //console.log(arr, arr.length)
                    break;
                case '--double-prev':
                    if (i == 0) {
                        arr.splice(i, 1);
                    } else {
                        arr[i] = arr[i - 1];
                    }
                    i--;
                    //console.log(arr, arr.length)
                    break;
            }


        }
        //console.log('end', arr)
        return arr;

    } else throw new Error();
};

//console.log(transform(['--discard-prev', 1, 2, 3]))
//console.log(transform(['--double-prev', 1, 2, 3]))
//console.log(transform([1, 2, 3, '--double-next']))
//console.log(transform([1, 2, 3, '--discard-next']))
//console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
//console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))
