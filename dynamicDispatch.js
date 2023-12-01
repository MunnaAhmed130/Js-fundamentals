let key = "u";

// function goUp() {
//     console.log("up");
// }
// function goDown() {
//     console.log("down");
// }
// function goLeft() {
//     console.log("left");
// }
// function goRight() {
//     console.log("right");
// }
function badKey() {
    console.log("BadKey");
}

// dispatch table
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

if (key in dispatch) {
    // dynamic dispatch
    dispatch[key]();
} else {
    badKey();
}

// if else.if else
// if (key === "up") {
//     goUp();
// } else if (key === "down") {
//     goDown();
// } else if (key === "left") {
//     goLeft();
// } else if (key === "right") {
//     goRight();
// } else {
//     badKey();
// }

// switch case break default
// break is important
// switch (key) {
//     case "up":
//         goUp();
//         break;

//     case "down":
//         goDown();
//         break;

//     case "left":
//         goLeft();
//         break;

//     case "right":
//         goRight();
//         break;

//     default:
//         badKey();
// }
