function sayHello() {
    console.log("Hello");
}

// not recommended
const learnMoreBtn = document.querySelector(".second-btn");
// learnMoreBtn.onclick = alert("Hello"); // wrong way
learnMoreBtn.onclick = () => alert("Hello");
console.log(learnMoreBtn);

// recommended
const bestBtn = document.querySelector(".best");
bestBtn.addEventListener("click", () => alert(""));

//
const form = document.querySelector("form");
const input = document.querySelector("input");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.dir(input.value);
    console.dir(input);
});
