// attributes - href, value, type
// getAttribute(attr), setAttribute(attr, value)

const a = document.querySelector("a");
// console.log(a.innerText, (a.href = "hey"));
// console.log(a.getAttribute("href"));
// a.setAttribute("href", "http://127.0.0.1:5500/dom/index.html");
// console.log(a.getAttribute("href"));

// get custom data attributes
// doesn't work
console.log(a["data-role"]); // undefined

// correct way to access custom data attr
console.log(a.dataset.role);
console.log(a.dataset["role"]);

// using getAttributes to access custom data attr
const dataAttr = a.getAttribute("data-role");
console.log(dataAttr);

const input = document.querySelector("input");
// dot notation
console.log(input, input.type, input.name, input.id, input.value);
// bracket notation
console.log("bracket Notation =>", input["name"]);

// set value to attr using dot notation
input.value = "Enter valu";
// set value to attr using dot notation
input["value"] = "Enter value";

// set attribute is better for dynamic attr handling
let attr = "value";
input.setAttribute(attr, "Hello");

// get to check for attribute
const attribute = input.getAttribute("types"); // null
console.log(input.type); // undefined

input.addEventListener("change", (e) => {
    console.log(e.target.value);
    a.href = e.target.value;
});
