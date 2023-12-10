const initApp = () => {
    const tButton = document.querySelector(".tbtn");
    tButton.addEventListener("click", throttle(clickLog, 2000));
    window.addEventListener("scroll", throttle(scrollLog, 200));
};

const clickLog = () => console.log("clicked");
const scrollLog = () => console.log("scrolled");

document.addEventListener("DOMContentLoaded", initApp);

const throttle = (fn, delay) => {
    let lastTime = 0;
    console.log("called Throttle Immediately");
    let id = 0;
    return (...args) => {
        const now = new Date().getTime();
        ++id;
        if (now - lastTime < delay) return;
        console.log(`event id:${id}`);
        lastTime = now;
        fn(...args);
    };
};
