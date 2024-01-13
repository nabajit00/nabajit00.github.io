import { randomRangeInt } from "./common.js";
import { addElementForParallax } from "./parallax.js";

const transitionTime = 100; //ms

const colors = ['wheat','white','#AAD9BB','#86A789','#FF6C22']

const listOfParticles = []

function move() {
    listOfParticles.forEach((particle)=>{
        const x = randomRangeInt(-2,2) + Number(particle.style.top.split('px')[0]);
        const y = randomRangeInt(-2,2) + Number(particle.style.left.split('px')[0]);

        particle.style.top = x + 'px';
        particle.style.left = y + 'px';

        particle.style.transform = 'transform ' + transitionTime + 'ms'; 
    })
    //    : translate(100px,1px);
}

function setup(){
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle)=>{
        particle.style.transition = 'transform ' + transitionTime + 'ms';
        particle.style.top = randomRangeInt(0,document.body.scrollHeight)+'px';
        particle.style.left = randomRangeInt(0,document.body.scrollWidth)+'px';

        const size = randomRangeInt(4,8);
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        addElementForParallax(particle,size*0.1);

        particle.style.backgroundColor = colors[randomRangeInt(0,colors.length - 1)];

        listOfParticles.push(particle);
    })
}

export function addNewObjectAsParticle(ele){
    listOfParticles.push(ele);
}

export function start(){
    setup();
    setInterval(move,transitionTime+1);
}

