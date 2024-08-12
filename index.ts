const headerField = document.getElementById("header-field");
let navField = document.querySelector("#header-field nav") as HTMLElement;





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