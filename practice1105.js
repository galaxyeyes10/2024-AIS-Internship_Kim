window.onload = handleOnLoad;

function handleOnLoad() {
    const buttons = document.querySelectorAll("button");
    for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        
        button.addEventListener("click", (event) => {
            carry(event);
        });
    }
    

    hover();

    function hover() {
        const itemName = document.querySelectorAll(".item-name");
        for (let index = 0; index < itemName.length; index++) {
            const name = itemName[index];
            
            name.addEventListener("mouseover", (event) => nameUnderLine(event));
            name.addEventListener("mouseout", (event) => removeUnderLine(event));
        }

        const images = document.querySelectorAll(".item-img");
        for (let index = 0; index < images.length; index++) {
            const itemImg = images[index];
            
            itemImg.addEventListener("mouseover", (event) => imgDetail(event));
        }

        const cartButtons = document.querySelectorAll("button");
        for (let index = 0; index < cartButtons.length; index++) {
            const cartButton = cartButtons[index];
            
            cartButton.addEventListener("mouseover", (event)=> cartSelect(event));
            cartButton.addEventListener("mouseout", (event)=> cartSelectOut(event));
        }

    }
    function nameUnderLine(event) {
        const name = event.target;
        name.style.textDecoration = "underline";
        name.style.cursor = "pointer";
    }
    function removeUnderLine(event) {
        const name = event.target;
        name.style.textDecoration = "none";
    }
    function imgDetail(event) {
        event.target.style.cursor = "pointer";
    }
    function cartSelect(event) {
        const cartButton = event.currentTarget;
        cartButton.style.cursor = "pointer";
        cartButton.style.backgroundColor = "rgb(168, 168, 168, 0.5)"
    }
    function cartSelectOut(event) {
        const cartButton = event.currentTarget;
        cartButton.style.backgroundColor = "white"
    }
    function carry(event) {
        const button = event.target;
        const selectImg = button.previousElementSibling;

        if (selectImg && selectImg.classList.contains('item-img')) {

            const wantBuyCart = document.getElementById("cart-content");

            let itemContainer = wantBuyCart.querySelector(`.item-container[data-img="${selectImg.src}"]`);

            if (!itemContainer) {
                itemContainer = document.createElement("div");
                itemContainer.classList.add("item-container");
                itemContainer.setAttribute("data-img", selectImg.src);

                const wantBuy = document.createElement("div");
                wantBuy.style.backgroundImage = `url("${selectImg.src}")`;
                wantBuy.classList.add("wantbuy-img");
                itemContainer.appendChild(wantBuy);

                const numberAndButton = document.createElement("div");
                numberAndButton.classList.add("num-and-button");

                const countElement = document.createElement("span");
                countElement.textContent = "1";
                countElement.style.fontSize = "18px";
                countElement.style.color = "black";

                itemContainer.appendChild(countElement);

                itemContainer.appendChild(numberAndButton);

                wantBuyCart.appendChild(itemContainer);

                numberAndButton.appendChild(countElement);
                
                const buttonContainer = document.createElement("div");
                buttonContainer.classList.add("button-container");
                
                numberAndButton.appendChild(buttonContainer);
                
                const removeButton = document.createElement("button");
                removeButton.classList.add("remove_button");
                removeButton.textContent = "1개 제거";
                buttonContainer.appendChild(removeButton);

                removeButton.addEventListener("mouseover", ()=>
                removeButton.style.cursor = "pointer"
                );
                
                removeButton.addEventListener("click", ()=> {
                    let clickCount = parseInt(countElement.textContent, 10);
                    if (clickCount <= 1) {
                        itemContainer.remove();
                    } else {
                    clickCount--;
                    countElement.textContent = clickCount;
                    }
                });
                
                const removeAllButton = document.createElement("button");
                removeAllButton.classList.add("removeAll_button");
                removeAllButton.textContent = "모두 제거";
                removeAllButton.style.marginLeft = "3px";
                buttonContainer.appendChild(removeAllButton);
                
                removeAllButton.addEventListener("mouseover", ()=>
                    removeAllButton.style.cursor = "pointer"
                );
                
                removeAllButton.addEventListener("click", ()=> {
                    itemContainer.remove();
                })
            } else {
                const countElement = itemContainer.querySelector("span");
                let clickCount = parseInt(countElement.textContent, 10);
                clickCount++;
                countElement.textContent = clickCount;
            }
        }
    }
}