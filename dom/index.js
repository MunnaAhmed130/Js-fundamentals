// createElement(), appendChild(), append(), prepend(), insertBefore(), removeChild(), remove()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

const body = document.body;
const section = document.createElement("section");
section.classList = "section";
section.innerText = "lorem";

console.log(body.appendChild(section, section));
console.log(body);

body.append(section);
console.log(body);
