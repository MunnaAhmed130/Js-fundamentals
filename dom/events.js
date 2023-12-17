const p = document.querySelector("p");

p.addEventListener("click", (e) => {
    // console.log("click", p.classList.toggle("para"));
});
// contextmenu = right click
p.addEventListener("contextmenu", (e) => {
    // console.log("contextmenu", p.classList.toggle("para"));
});

p.addEventListener("dblclick", (e) => {
    // console.log("dblclick", p.classList.toggle("para"));
});
p.addEventListener("mousedown", (e) => {
    // console.log("mousedown", p.classList.toggle("para"));
});
p.addEventListener("mouseup", (e) => {
    // console.log("mouseup", p.classList.toggle("para"));
});
p.addEventListener("mouseleave", (e) => {
    // console.log("mouseleave", p.classList.toggle("para"));
});
p.addEventListener("mouseover", (e) => {
    // console.log("mouseover", p.classList.toggle("para"));
});
p.addEventListener("mousemove", (e) => {
    // console.log("mousemove", p.classList.toggle("para"));
});
p.addEventListener("mouseout", (e) => {
    // console.log("mouseout", p.classList.toggle("para"));
});
p.addEventListener("mouseenter", (e) => {
    // console.log("mouseenter", p.classList.toggle("para"));
});

const input = document.querySelector("input");

// input.addEventListener("keypress", (e) => {
//     console.log(e.target.value);
// });

// input.addEventListener("keyup", (e) => {
//     console.log(e.target.value);
// });

input.addEventListener("keypress", (e) => {
    // console.log(e.key.charCodeAt(0), e.code, );
    // console.log(e.ctrlKey);
    console.log(e);
    // console.log(e.shiftKey);
});

// console.log("a".charCodeAt[0]);
