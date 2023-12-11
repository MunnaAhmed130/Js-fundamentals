const isPalindrome = require("./isPalindrome");

test("Radar is a palindrome", () => {
    expect(isPalindrome("Radar")).toBe(true);
});

test("Never is a palindrome", () => {
    expect(isPalindrome("Never")).toBe(false);
});
