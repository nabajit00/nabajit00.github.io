import { addNewObjectAsParticle } from "./brownian.js";
import { randomRange, randomRangeInt } from "./common.js";
import { addElementForParallax } from "./parallax.js";

const bubbleContainer = document.querySelector('.bubbles');
const shadowRatio = 0.8;

const insideColors = ['rgba(0, 255, 255, 0.2)','rgba(127, 225, 212,0.2)'];
function addInsideColorToBubble(bubble,size){
    const colorInside = document.createElement('div');
    colorInside.style.position = 'absolute';
    
    const shadowSize = shadowRatio*size*0.5;
    colorInside.style.boxShadow = 'inset '+-shadowSize + 'vmax 0px '+ shadowSize +'vmax ' + insideColors[randomRangeInt(0,insideColors.length-1)];
    colorInside.style.height = size+'vmax';
    colorInside.style.width = size+'vmax';
    colorInside.style.borderRadius = '50%';

    bubble.appendChild(colorInside);
}

function createBubbles(value){
    for(let i=0;i<value.count;i++){
        const size = randomRange(value.min,value.max);
        const newBubble = document.createElement('div');
        newBubble.style.height = size+'vmax';
        newBubble.style.width = size+'vmax';
    
        
        newBubble.style.boxShadow = 'inset 0px 0px '+ shadowRatio*size +'vmax rgba(255, 255, 255, 0.1)';
    
        newBubble.classList.add('bubble');
    
        const x = randomRangeInt(0,document.body.scrollWidth);
        const y = randomRangeInt(0,document.body.scrollHeight);

        newBubble.style.left = x + 'px';
        newBubble.style.top = y + 'px';

        addInsideColorToBubble(newBubble,size);
        addElementForParallax(newBubble,8/size);
        addNewObjectAsParticle(newBubble);
        
        bubbleContainer.appendChild(newBubble);
    }
}

function setBubblesContainerHeight(){
    bubbleContainer.style.height = document.body.scrollHeight + 'px';
}

//300 of size 1 to 2
//100 of size 4 to 15
//5 of size 20 to 25
[{'max':3,'min':1,'count':100},
{'max':8,'min':4,'count':10},
{'max':20,'min':16,'count':2}
].forEach((value)=>{
    createBubbles(value);
})


setBubblesContainerHeight();

window.addEventListener('resize', setBubblesContainerHeight);