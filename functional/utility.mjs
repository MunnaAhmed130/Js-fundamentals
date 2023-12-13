/*
    Utility functions are time savers
    Abstract functions that you can use in many applications 
    Not coupled to a data model or specific interface

    Benefits:
    1. Add additional functionality not built-in to JS
    2. Reduce tedious typeing down to a simple function call
*/

// Usually kept in their own module and imported
// import { properCase, log } from "utils.js";

// ... or in a utility class as methods to call upon, often static methods
// Think of objects with methods like Math.random() and JSON.stringify()
// A class like this has no constructor and no state
class Util {
    static myFunction() {
        // do stuff ...
        // console.log("Hey!");
    }
}

Util.myFunction();

// #1  proper case
const properCase = (string) => {
    return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;
};

// #2  console.log
export const log = (content) => {
    console.log(content);
};

// module.exports = { log };
// log(properCase("muNna"));

// #3  query selector with optional scope
const select = (selector, scope) => {
    return (scope || document).querySelector(selector);
};

// log(select("#header"));
// let body = select("body");
// log(body);

// #4  addEventListener wrapper
const listen = (target, event, callback, capture = false) => {
    target.addEventListener(event, callback, !!capture);
};

const eventLog = (e) => console.log(e.target);

// listen(body, "click", eventLog);

// #5 sanitize input - use RegEx or try this
const sanitizeInput = (inputValue) => {
    const div = document.createElement("div");
    div.textContent = inputValue;
    return div.innerHTML;
};

const dirtyInput = '<script>alert("xss attack")</script>';
// log(dirtyInput);
// log(sanitizeInput(dirtyInput));

// #6 Create an element with an optional css class
const createElement = (tag, className) => {
    const el = document.createElement(tag);
    if (className) el.classList.add(className);
    return el;
};

// const root = createElement("main", "root");
// body.appendChild(root);

// #7 Delete all contents
const deleteChildElements = (parentElement) => {
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};

// deleteChildElements(body);

// #8 add class with optional query scope
const addClass = (selector, className, scope) => {
    (scope || document).querySelector(selector).classList.add(className);
};

// addClass("body", "purple");

// #9 check for ios
const isIOS = () => {
    return (
        (/ipad|iPhone|iPod/.test(navigator.platform) ||
            navigator.maxTouchPoints > 1) &&
        !window.MSStream
    ); // MSStream is to avoid IE11
};

// log(isIOS());

// #10 get parameters by name from url
const getParameterValue = (paramName, url) => {
    if (!url) url = window.location.href;
    const regex = new RegExp(`[?&]${paramName}(=([^&#]*))`);
    const results = regex.exec(url);
    console.log(results);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

const PARAM = "paramTwo";
const URL = "https://www.testURL.com/?paramOne=one&paramTwo=Hello+World!";

// log(getParameterValue(PARAM, URL));
