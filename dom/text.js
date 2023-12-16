// innerText
// textContent
// innerHTML

const p = document.querySelector("p");

// not formatted, no tags, only texts visible to the ui
// console.log("innerText =", p.innerText);

// formatted, no tags, all text
// good for web scraping , gets hidden text also
// console.log("textContent =", p.textContent);

// formatted with tags
// console.log("innterHTML =", p.innerHTML);

// p.innerHTML = "<strong>Hello</strong>";
// p.textContent = "<strong>Hello</strong>";
// p.innerText = "<strong>Hello</strong>";

// p.innerHTML = '<script> alert("Hello") </script>H';
// p.innerText = '<script> console.log("Hello") </script>';
// p.textContent = '<script> console.log("Hello") </script>';

/*
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
console.log(first.innerText);
console.log(second.textContent);
console.log(third.innerHTML);
*/

// console.log(p);
const n = 100;

// make a table node
const table = document.createElement("table");

// const tr = document.createElement("tr");
// const th = document.createElement("th");
// th.innerText = "Numbers";
// th.setAttribute("col-span", "3");
// tr.appendChild(th);
// table.appendChild(tr);

for (let i = 0; i < n; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
        const td = document.createElement("td");
        td.innerText = `Row ${i + 1}, cell ${j + 1}`;
        // tr.innerHTML = data;
        tr.appendChild(td);
    }

    // td.innerHTML = `<td>${i}</td>`;

    // console.log(i + 1);
    table.appendChild(tr);
}

document.querySelector("body").appendChild(table);

// Run a test
function getValues() {
    const tds = document.querySelectorAll("td");
    const values = [];
    const start = performance.now();

    // In a loop
    for (let i = 0; i < n; i++) {
        // textContent is faster
        // values.push(tds[i].textContent);
        // innerText is slower
        // values.push(tds[i].innerText);
    }

    const duration = performance.now() - start;
    console.log(duration);
}

// getValues();
