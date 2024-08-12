"use strict";
const headerField = document.getElementById("header-field");
let navField = document.querySelector("#header-field nav");
const mainField = document.getElementById("main-field");
const modalField = document.getElementById("section-modal");
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
mainField.onclick = (event) => {
    const addCartBtn = (event === null || event === void 0 ? void 0 : event.target).closest(".add-cart-btn");
    if (addCartBtn) {
        modalField.style.visibility = `visible`;
        modalField.style.opacity = `1`;
        modalField.style.transform = `scale(1)`;
    }
};
modalField.onclick = (event) => {
    console.log((event === null || event === void 0 ? void 0 : event.target).classList.contains("#section-modal"));
    const closeModalBtn = (event === null || event === void 0 ? void 0 : event.target).closest(".close-modal-btn");
    if (closeModalBtn) {
        console.log("Fechar");
    }
};
