// Write code to return the largest number in the given array

var maxNum = function(arr) {
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        var num = arr[i];
        if(num > max){
            max = num;
        }
    }
    console.log(max);
    return max;
};

maxNum([3, 1, 17, 5, 6]);