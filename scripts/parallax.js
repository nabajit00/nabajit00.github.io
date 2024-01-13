const listOfElements = []

export function addElementForParallax(element,speed){
    listOfElements.push({
        'speed':speed,
        'element':element
    })
}

document.addEventListener('scroll',(ev)=>{
    const scrollY = window.scrollY;
    listOfElements.forEach((element)=>{
        const yPos = -scrollY * element.speed;
        element.element.style.transform = "translate3d(0px, " + yPos + "px, 0px)";
    })
})