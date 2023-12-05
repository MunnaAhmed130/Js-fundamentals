// string
let name = "adam";
let age = 20;
// template literals with string interpolation
// console.log(`Hello my is ${name}`);

const game = new String("Football");

// console.log(game);
console.log(game[0], game.charAt(0));
console.log(game.indexOf("t"));

const newString = game.substring(0, 4);
console.log(newString);

const anotherString = game.slice(-8, 4);
console.log(anotherString);

// trim()
const newStringOne = "   David    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://media.com/author%20is%20alive";

// replace
console.log(url.replace("%20", "-"));
console.log(url.replaceAll("%20", "-"));

console.log(url.includes("author"));

console.log(game.split("t"));
