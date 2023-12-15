// innerText
// textContent
// innerHTML

const p = document.querySelector("p");

console.log("innerText =", p.innerText); // not formatted, no tags
console.log("textContent =", p.textContent); // formatted without tags
console.log("innterHTML =", p.innerHTML); // formatted with tags

// p.innerHTML = "<strong>Hello</strong>";
p.textContent = "<strong>Hello</strong>";
p.innerText = "<strong>Hello</strong>";
