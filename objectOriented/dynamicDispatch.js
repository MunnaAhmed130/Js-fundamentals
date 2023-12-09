function goUp() {
    console.log("up");
}
function goDown() {
    console.log("down");
}
function goLeft() {
    console.log("left");
}
function goRight() {
    console.log("right");
}
function badKey() {
    console.log("BadKey");
}

/* --------------------
if (key === "up") {
    goUp();
} else if (key === "down") {
    goDown();
} else if (key === "left") {
    goLeft();
} else if (key === "right") {
    goRight();
} else {
    badKey();
}
----------------------------*/

/* -----------------------------
//  switch case break default
//  break is important
switch (key) {
    case "up":
        goUp();
        break;

    case "down":
        goDown();
        break;

    case "left":
        goLeft();
        break;

    case "right":
        goRight();
        break;

    default:
        badKey();
}

-------------------------------- */
/*
    dispatch table/lookup object/object lookup
    "calling a method on an object" was known as "sending a message to an object"
    dispatch and send are synonyms
    in js method calls are always dynamic
*/
let dispatch = {
    // up: goUp,
    // down: goDown,
    // left: goLeft,
    // right: goRight,
    // or
    up: () => console.log("up"),
    down: () => console.log("down"),
    left: () => console.log("left"),
    right: () => console.log("right"),
};

// dynamic dispatch
// if (key in dispatch) {
//     dispatch[key]();
// } else {
//     badKey();
// }

let key = "u";

key in dispatch ? dispatch[key]() : badKey();
