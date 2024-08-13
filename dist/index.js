"use strict";
const headerField = document.getElementById("header-field");
let navField = document.querySelector("#header-field nav");
const mainField = document.getElementById("main-field");
const modalField = document.getElementById("section-modal");
const cart = [];
headerField.onclick = (event) => {
    const nikeBtn = (event === null || event === void 0 ? void 0 : event.target).closest(".nike-btn");
    if (nikeBtn) {
        if (navField.style.opacity === "1" && navField.style.visibility === "visible") {
            navField.style.opacity = `0`;
            navField.style.visibility = "hidden";
            navField.style.transform = `translateX(-100%)`;
            navField.style.scale = `0.6`;
        }
        else {
            navField.style.opacity = `1`;
            navField.style.visibility = "visible";
            navField.style.transform = `translateX(12%)`;
            navField.style.scale = `1`;
        }
    }
    const cartBtn = (event === null || event === void 0 ? void 0 : event.target).closest("#cart-btn");
    if (cartBtn) {
        modalField.style.visibility = `visible`;
        modalField.style.opacity = `1`;
        modalField.style.transform = `scale(1)`;
    }
};
mainField.onclick = (event) => {
};
modalField.onclick = (event) => {
    const closeModalBtn = (event === null || event === void 0 ? void 0 : event.target).closest(".close-modal-btn");
    if (closeModalBtn || (event === null || event === void 0 ? void 0 : event.target) === modalField) {
        modalField.style.visibility = `hidden`;
        modalField.style.opacity = `0`;
        modalField.style.transform = `scale(1.3)`;
    }
};
