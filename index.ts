const headerField = document.getElementById("header-field");
let navField = document.querySelector("#header-field nav") as HTMLElement;
const mainField = document.getElementById("main-field");
const modalField = document.getElementById("section-modal");
const itemsModal = document.getElementById("items-modal")
interface nikeCartItems
{
    name: string | null,
    price: number,
    quantity: number
}


const cart: Array<nikeCartItems> = []

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
    const addBtn = (event?.target as HTMLElement).closest(".add-cart-btn");
    
    if(addBtn)
    {
        const name = addBtn.getAttribute("data-name")
        const price = Number(addBtn.getAttribute("data-price"))

        let itemFilter = cart.find(item => item.name === name)
        if(itemFilter)
        {
            itemFilter.quantity += 1;
        }
        else
        {
            cart.push({
                name,
                price,
                quantity: 1
            })
            
        }

        
    }
}

const updateItems = () =>
{
    itemsModal!.innerHTML = ``;
    
    cart.map(item => 
    {
        const contentItem = document.createElement("section");

    }
    )

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