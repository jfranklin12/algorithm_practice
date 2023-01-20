// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    var totalVowel = 0;
       
    
    for(var i = 0; i < str.length; i++){
        var character = str[i].toLowerCase();

        if(character === 'a' || character === 'e' || character === 'i' ||  character === 'o' || character === 'u'){
            
         totalVowel += 1;
        }
    }
    console.log(totalVowel)
    return totalVowel;
};

vowelCount("turn the buckle on the quarter")
