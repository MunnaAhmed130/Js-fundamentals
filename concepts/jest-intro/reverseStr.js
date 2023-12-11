function reverseStr(word) {
    return word.split("").reverse().join().replaceAll(",", "");
}

module.exports = reverseStr;
