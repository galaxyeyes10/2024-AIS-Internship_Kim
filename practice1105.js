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

        const kartButtons = document.querySelectorAll("button");
        for (let index = 0; index < kartButtons.length; index++) {
            const kartButton = kartButtons[index];
            
            kartButton.addEventListener("mouseover", (event)=> kartSelect(event));
            kartButton.addEventListener("mouseout", (event)=> kartSelectOut(event));
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
    function kartSelect(event) {
        const kartButton = event.currentTarget;
        kartButton.style.cursor = "pointer";
        kartButton.style.backgroundColor = "rgb(168, 168, 168, 0.5)"
    }
    function kartSelectOut(event) {
        const kartButton = event.currentTarget;
        kartButton.style.backgroundColor = "white"
    }
    function carry(event) {
        const button = event.target;
        const selectImg = button.previousElementSibling;

        if (selectImg && selectImg.classList.contains('item-img')) {

            const wantBuyKart = document.getElementById("kart-content");

            let itemContainer = wantBuyKart.querySelector(`.item-container[data-img="${selectImg.src}"]`);

            if (!itemContainer) {
                itemContainer = document.createElement("div");
                itemContainer.classList.add("item-container");
                itemContainer.setAttribute("data-img", selectImg.src);

                const wantBuy = document.createElement("div");
                wantBuy.style.backgroundImage = `url("${selectImg.src}")`;
                wantBuy.style.backgroundPosition = "center";
                wantBuy.style.width = "100px";
                wantBuy.style.height = "100px";
                wantBuy.style.borderRadius = "5px"
                wantBuy.style.display = "inline-block";
                wantBuy.style.marginRight = "10px";
                itemContainer.appendChild(wantBuy);

                const countElement = document.createElement("span");
                countElement.textContent = "1";
                countElement.style.fontSize = "18px";
                countElement.style.color = "black";
                countElement.style.display = "inline-block";
                countElement.style.marginTop = "10px";
                itemContainer.appendChild(countElement);

                wantBuyKart.appendChild(itemContainer);

                const removeButton = document.createElement("button");
                removeButton.classList.add("remove_button");
                removeButton.textContent = "1개 제거";
                removeButton.style.marginTop = "70px";
                itemContainer.appendChild(removeButton);

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
                removeAllButton.style.marginTop = "70px";
                removeAllButton.style.marginLeft = "3px";
                itemContainer.appendChild(removeAllButton);
                
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