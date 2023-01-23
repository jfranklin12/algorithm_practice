// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    var upperCaseWord = [];
    
    var newStr = str.split(" ");

    for(var i = 0; i < newStr.length; i++){
        var letters = newStr[i].split("");
        // console.log(letters);
        letters[0] = letters[0].toUpperCase();
        // console.log(letters);
        upperCaseWord.push(letters.join(""));
    }
    // console.log(upperCaseWord.join(" "));
    return upperCaseWord.join(" ");
    
};

titleCase("the food is here");