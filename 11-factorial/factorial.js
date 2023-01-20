// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    let product = 1;
    for(var i = 1; i <= num; i++){
        product *= i

    }
    console.log(product)
    return product;
};

factorial(10);