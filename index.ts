const headerField = document.getElementById("header-field");
let navField = document.querySelector("#header-field nav") as HTMLElement;
const mainField = document.getElementById("main-field");
const modalField = document.getElementById("section-modal");



headerField!.onclick = (event:MouseEvent | null) =>
{
    
    const nikeBtn = (event?.target as HTMLElement).closest(".nike-btn");
    if(nikeBtn)
    {        
        if (navField!.style.opacity === "1" && navField!.style.visibility === "visible")
        {
            navField!.style.opacity = `0`;
            navField!.style.visibility = "hidden";
        }
        else
        {
            navField!.style.opacity = `1`;
            navField!.style.visibility = "visible";
        }
    }
    
}


mainField!.onclick = (event:MouseEvent | null) =>
{
    const addCartBtn = (event?.target as HTMLElement).closest(".add-cart-btn");
    if(addCartBtn)
    {
        modalField!.style.visibility = `visible`;
        modalField!.style.opacity = `1`;
        modalField!.style.transform = `scale(1)`;
    }
}

modalField!.onclick = (event:MouseEvent | null) =>
{
    console.log((event?.target as HTMLElement).classList.contains("#section-modal"))
    const closeModalBtn = (event?.target as HTMLElement).closest(".close-modal-btn");
    if(closeModalBtn)
    {
        console.log("Fechar")
    }
}