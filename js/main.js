// function centuryFromYear(year) {
//     var mod = year % 100;
//     if (mod === 0) {
//         centuryFromYear = year / 100;
//         return centuryFromYear;
//     } else {
//         centuryFromYear = (year / 100 - (mod / 100) + 1);
//     }
// }


function checkPalindrome(inputString) {
    var length = inputString.length;
    console.log(length);
    var split = inputString.split('');
    console.log(split);
    // create if statement when string is even numbered
    if (length === 2) {
        if (split[0] === split[1]) {
            return true
        } else {
            return false
        }
    } else if (length === 3) {
        if (split[0] === split[2]) {
            return true
        } else {
            return false
        }
    } else if (length % 2 === 0) {
        for (var i = 0; i < length / 2 - 1; i++) {
            if (split[i] === split[(length - 1) - i]) {
                return console.log (split[i]);
                i++;
            } else {
                return false;
            }
        }
    } else if (length === 1) {
        return true;
    } else if (length % 2 === 1) {
        for (var i = 0; i < Math.floor(length / 2 - 1); i++) {
            if (split[i] === split[(length - 1) - i]) {
                console.log(split[i]);
                console.log(split[(length - 1) - i])
                return true;
                i++;
            } else {
                return false;
                console.log(split[i]);
            }
        }
    }
}

