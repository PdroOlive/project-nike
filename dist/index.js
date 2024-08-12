"use strict";
const headerField = document.getElementById("header-field");
let navField = document.querySelector("#header-field nav");
headerField.onclick = (event) => {
    const nikeBtn = (event === null || event === void 0 ? void 0 : event.target).closest(".nike-btn");
    if (nikeBtn) {
        if (navField.style.opacity === "1" && navField.style.visibility === "visible") {
            navField.style.opacity = `0`;
            navField.style.visibility = "hidden";
        }
        else {
            navField.style.opacity = `1`;
            navField.style.visibility = "visible";
        }
    }
};
