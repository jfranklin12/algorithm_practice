// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
    var compareNums = {}
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        if (compareNums[num] === true) {
            // console.log(false);
            return false;
        }
        compareNums[num] = true;
    }
    // console.log(true);
    return true;
}

isUnique([20, -15, 18, 2, 3, 60])
