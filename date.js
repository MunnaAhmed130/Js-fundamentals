// Dates

let myDate = new Date();

/*

console.log("to String            =>", myDate.toString());
console.log("to Date String       =>", myDate.toDateString());
console.log("to ISO String        =>", myDate.toISOString());
console.log("to JSON              =>", myDate.toJSON());
console.log("to locale DateString =>", myDate.toLocaleDateString());
console.log("to Locale String     =>", myDate.toLocaleString());
console.log("to Locale TimeString =>", myDate.toLocaleTimeString());
console.log("to Time String       =>", myDate.toTimeString());
console.log("to UTC String        =>", myDate.toUTCString());

*/
/*
console.log("getDate            =>", myDate.getDate());
console.log("getDay             =>", myDate.getDay());
console.log("getFullYear        =>", myDate.getFullYear());
console.log("getHours           =>", myDate.getHours());
console.log("getMilliseconds    =>", myDate.getMilliseconds());
console.log("getMinutes         =>", myDate.getMinutes());
console.log("getSeconds         =>", myDate.getSeconds());
console.log("getTime            =>", myDate.getTime());
console.log("getTimezoneOffset  =>", myDate.getTimezoneOffset());
console.log("getUTCDate         =>", myDate.getUTCDate());
console.log("getUTCDay          =>", myDate.getUTCDay());
console.log("getUTCFullYear     =>", myDate.getUTCFullYear());
console.log("getUTCHours        =>", myDate.getUTCHours());
console.log("getUTCMilliseconds =>", myDate.getUTCMilliseconds());
console.log("getUTCMinutes      =>", myDate.getUTCMinutes());
console.log("getUTCMonth        =>", myDate.getUTCMonth());
console.log("getUTCSeconds      =>", myDate.getUTCSeconds());
// console.log("getVarDate         =>", myDate.getVarDate());
*/

console.log(new Date(2023, 11, 15).toString());
console.log(new Date("12-15-2023").toLocaleString());

let now = Date.now();
let newDate = new Date();

// console.log(now, timeInMS);

let timeInSec = Math.round(newDate.getTime() / 1000);
// console.log(timeInSec);

console.log(newDate.toLocaleString("default", { weekday: "long" }));
