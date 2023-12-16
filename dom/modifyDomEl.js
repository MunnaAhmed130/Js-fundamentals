// createElement(), appendChild(), append(), prepend()

/*
const body = document.body;
// create a element
const h1 = document.createElement("h1");
h1.classList = "heading1";
h1.innerText = "!";

// appendChild can only take 1 argument which has to be element
console.log(body.appendChild(h1));
console.log(body);

body.append(h1);
// append can take multiple values both element and string
h1.append("Hello", "World");
console.log(body);

h1.prepend("Hello", "World");
*/

// selector.insertBefore(what,where),

/*
const ul = document.querySelector("ul");
const li = document.querySelector("li");
const listItem = document.createElement("li");
listItem.append("Lamb");

ul.insertBefore(listItem, li);
ul.insertBefore(listItem, ul.firstElementChild);
ul.insertBefore(listItem, ul.lastElementChild);
ul.insertBefore(listItem, ul.children[Math.floor(ul.childElementCount / 2)]);
console.log(li, listItem, ul.childElementCount / 2);
 */

// const body = document.body;
// const div = document.querySelector("div");
// const p = document.createElement("p");
// p.innerText = "HEllo";

// body.insertBefore(p, div);

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */
// const p = document.querySelector("p");
// const span = document.createElement("span");
// span.innerText = "HELLO";

// p.insertAdjacentElement("beforebegin", span);
// p.insertAdjacentElement("beforeend", span);
// p.insertAdjacentElement("afterbegin", span);
// p.insertAdjacentElement("afterend", span);

// console.log(span);

// const ul = document.querySelector("ul");
// const item = document.createElement("li");
// item.innerText = "Mango";
// ul.insertAdjacentElement("afterbegin", item);
// ul.insertAdjacentElement("afterend", item);
// ul.insertAdjacentElement("beforeend", item);
// ul.insertAdjacentElement("beforebegin", item);

//removeChild(), remove()
const ul = document.querySelector("ul");

ul.removeChild(ul.firstElementChild);
ul.remove();
