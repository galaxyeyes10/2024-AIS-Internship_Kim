function handleOnLoad() {
    
    const container = document.querySelectorAll(".container img");
    for (let index = 0; index < container.length; index++) {
        const element = container[index];

            element.addEventListener("mouseover", ()=> {
                scaleAndOpacity(element, 1.3, 1);});
    
            element.addEventListener("mouseout", ()=> {
                scaleAndOpacity(element, 1, 0.5);});        
    }
}

function scaleAndOpacity(image, scale, opacity) {
    image.style.transform = `scale(${scale})`;
    image.style.opacity = opacity;
}