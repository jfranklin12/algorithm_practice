// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    var camel = [];
    var newStr = str.split(" ");
    // console.log(newStr)
    for(var i = 1; i < newStr.length; i++){
        var letters = newStr[i].split('');
        letters[0] = letters[0].toUpperCase();
        // console.log(letters[0]);
        camel.push(letters.join(""));
    }

    // console.log(newStr[0].toLowerCase() + camel.join(""))
    return newStr[0].toLowerCase() + camel.join("")
};

camelCase("The rain in spain falls mainly on the plain")