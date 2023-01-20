// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    var newStr = "";
    for(var i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    } if(newStr === str) {
        return true;
    } else {
        return false;
    }
};
