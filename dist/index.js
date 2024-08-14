"use strict";
const headerField = document.getElementById("header-field");
let navField = document.querySelector("#header-field nav");
const mainField = document.getElementById("main-field");
const modalField = document.getElementById("section-modal");
const itemsModal = document.getElementById("items-modal");
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
    const addBtn = (event === null || event === void 0 ? void 0 : event.target).closest(".add-cart-btn");
    if (addBtn) {
        const name = addBtn.getAttribute("data-name");
        const price = Number(addBtn.getAttribute("data-price"));
        let itemFilter = cart.find(item => item.name === name);
        if (itemFilter) {
            itemFilter.quantity += 1;
        }
        else {
            cart.push({
                name,
                price,
                quantity: 1
            });
        }
    }
};
const updateItems = () => {
    itemsModal.innerHTML = ``;
    cart.map(item => {
        const contentItem = document.createElement("section");
        contentItem.innerHTML =
            `
            <div>
                <p>name</p>
                <span>qtd</span>
            </div>
            <div>
                <button>-</button>
                <span>0</span>
                <button>+</button>
            </div>
        `;
        itemsModal === null || itemsModal === void 0 ? void 0 : itemsModal.appendChild(contentItem);
    });
};
modalField.onclick = (event) => {
    const closeModalBtn = (event === null || event === void 0 ? void 0 : event.target).closest(".close-modal-btn");
    if (closeModalBtn || (event === null || event === void 0 ? void 0 : event.target) === modalField) {
        modalField.style.visibility = `hidden`;
        modalField.style.opacity = `0`;
        modalField.style.transform = `scale(1.3)`;
    }
};
