// string
let name = "adam";
let age = 20;
// template literals with string interpolation
// console.log(`Hello my is ${name}`);

// const game = new String("Football");
const game = "Football";

console.log(game[0], game.charAt(0));
console.log(game.indexOf("t"));

console.log(game.substring(0, 4));
console.log(game.slice(-8, 4));
console.log(game.split("t"));
console.log(game);

// trim()
const newStringOne = "   David    ";
console.log(newStringOne.trim());

const url = "https://media.com/author%20is%20alive";

// replace
console.log(url.replace("%20", "-"));
console.log(url.replaceAll("%20", "-"));

console.log(url.includes("author"));
