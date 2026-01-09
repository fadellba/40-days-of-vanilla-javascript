function hideText() {
    const pElem = document.querySelector("p");
    const btnElem = document.querySelector("button");

    const toggle = pElem.classList.toggle('hide');
    btnElem.innerText = toggle ? "display text" : "hide text";  
    
}