const reverseStr = require("./reverseStr");

function hello() {
    return "Hello";
}

function isPalindrome(word) {
    return word.toLowerCase() === reverseStr(word).toLowerCase();
}

// console.log(isPalindrome("dad"));

module.exports = isPalindrome;
