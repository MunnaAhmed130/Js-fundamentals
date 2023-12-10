const initApp = () => {
    const tButton = document.querySelector(".tbtn");
    tButton.addEventListener("click", clickLog);
};

const clickLog = () => console.log("clicked");

document.addEventListener("DOMContentLoaded", initApp);
