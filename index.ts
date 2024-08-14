const headerField = document.getElementById("header-field");
let navField = document.querySelector("#header-field nav") as HTMLElement;
const mainField = document.getElementById("main-field");
const modalField = document.getElementById("section-modal");
const itemsModal = document.getElementById("items-modal");
const totalField = document.getElementById("total");
const sectionImage = document.getElementById("section-image");
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
        updateItems()
    }
    let isClicked:boolean = false;
    const detalisBtn: HTMLElement | null = (event?.target as HTMLElement).closest(".details-btn");
    if(detalisBtn && detalisBtn.innerText === "DETALHES")
    {
        sectionImage!.style.transform = `rotateY(180deg)`;
        detalisBtn!.innerHTML = `TÊNIS`;
        return;
    }
    else if(detalisBtn && detalisBtn.innerText === "TÊNIS")
    {
        sectionImage!.style.transform = `rotateY(0)`;
        detalisBtn!.innerHTML = `DETALHES`;
    }
}

const updateItems = () =>
{
    itemsModal!.innerHTML = ``;
    let total:number = 0
    cart.forEach(item => 
    {

        const currentPrice = item.price.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});

        const contentItem = document.createElement("section");
        contentItem!.innerHTML = 
        `
            <div>
                <p>${item.name}</p>
                <span>${currentPrice}</span>
            </div>
            <div>
                <button class="remove-qtd">-</button>
                <span>${item.quantity}</span>
                <button class="add-qtd">+</button>
            </div>
        `;

        total += (item.price * item.quantity);
        itemsModal?.appendChild(contentItem);
    });
    const currentTotal = total.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
    totalField!.innerHTML = `Total : ${currentTotal}`;
    
    
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
    
    const remove = (event?.target as HTMLElement).closest(".remove-qtd");
    if(remove)
    {
        cart.forEach(item => 
            {
                item.quantity -= 1;
                if(item.quantity < 1)
                {
                    item.quantity = 0;
                }
            })  
        updateItems()
    }

    const add = (event?.target as HTMLElement).closest(".add-qtd");
    if(add)
    {
        cart.forEach(item => item.quantity += 1)
        updateItems()
    }
    
}