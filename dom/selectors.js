console.log(document);

// selectors
document.getElementById("h1").innerHTML = "Hey World!";
// getElementById is method, demo is element, innerHTML is property
const p = document.getElementsByTagName("p"); // finds all elements with tag name
// console.log(p);
document.getElementsByClassName(""); // finds all elements with class name
// document.querySelector(); // returns the first element
// find all that matches a specific css selector
// document.querySelectorAll("p.intro");

// all list item
const li = document.querySelectorAll("li");
console.log(li);
const listArr = [...li].map((item) => item.innerText);
console.log(listArr);

// specific list item
const ul = document.querySelector("#fruit");
console.log(ul.querySelectorAll("li"));

const list = [...ul.querySelectorAll("li")].map((item) => item.textContent);
console.log(list);
