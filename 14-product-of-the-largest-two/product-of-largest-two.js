// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] > arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
    }
    // console.log(arr);
    var product = 0
    product = arr[0] * arr[1];
    // console.log(product)
    return product;
};

productOfLargestTwo([10, 20, 9, 60, 3])