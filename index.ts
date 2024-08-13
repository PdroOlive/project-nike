const headerField = document.getElementById("header-field");
let navField = document.querySelector("#header-field nav") as HTMLElement;
const mainField = document.getElementById("main-field");
const modalField = document.getElementById("section-modal");

const cart: [] = []

headerField!.onclick = (event:MouseEvent | null) =>
{
    const nikeBtn = (event?.target as HTMLElement).closest(".nike-btn");
    if(nikeBtn)
    {        
        if (navField!.style.opacity === "1" && navField!.style.visibility === "visible")
        {
            navField!.style.opacity = `0`;
            navField!.style.visibility = "hidden";
            navField.style.transform = `translateX(-100%)`;
            navField.style.scale = `0.6`;
        }
        else
        {
            navField!.style.opacity = `1`;
            navField!.style.visibility = "visible";
            navField.style.transform = `translateX(12%)`;
            navField.style.scale = `1`;
        }
    }
    const cartBtn = (event?.target as HTMLElement).closest("#cart-btn");
    if(cartBtn)
    {
        modalField!.style.visibility = `visible`;
        modalField!.style.opacity = `1`;
        modalField!.style.transform = `scale(1)`;
    }
    
}


mainField!.onclick = (event:MouseEvent | null) =>
{
    
}

modalField!.onclick = (event:MouseEvent | null) =>
{
    
    const closeModalBtn = (event?.target as HTMLElement).closest(".close-modal-btn");
    if(closeModalBtn || event?.target === modalField)
    {
        modalField!.style.visibility = `hidden`;
        modalField!.style.opacity = `0`;
        modalField!.style.transform = `scale(1.3)`;
    }
}