// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    
    var newStr = str.split(" ");
        
    for(var i = 0; i < newStr.length; i++){
        console.log(newStr.length);
        var letters = newStr[i].toString().split("");
        console.log(letters);
        var firstLetter = letters[0].toString().toUpperCase();
        console.log(firstLetter);
        
    }
    
};

titleCase("open the can")