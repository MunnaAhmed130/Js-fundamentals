const extension = "/";

const extensionObj = {
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".txt": "text/plain",
};

// console.log(extensionObj[extension] || "text/html");

const myMap = new Map();
myMap.set(".css", "text/css");
myMap.set(".js", "text/javascript");
myMap.set(".json", "application/json");
myMap.set(".jpg", "image/jpeg");
myMap.set(".png", "image/png");
myMap.set(".txt", "text/plain");

console.log(myMap.get(extension) || "text/html");
