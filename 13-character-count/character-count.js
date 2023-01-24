// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    var characterKey = {}
    for(var i = 0; i < str.length; i++){    
        var character = str[i];
        if(characterKey[character]){
            characterKey[character]++;
        }else {
            characterKey[character] = 1;
        }
        }
        console.log(characterKey);
        return(characterKey);
        
};

characterCount("Hello World! Hi, how are you?");