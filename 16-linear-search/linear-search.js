// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function (arr, target) {
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i]
        if (num === target) {
            // console.log(i);
            return i;
        }
    }
    // console.log(-1);
    return (-1);
};

linearSearch([10, 16, 19, 20], 19)