import {} from "./pageAnimation.js";
import {} from "./bubble.js";
import { addElementForParallax } from "./parallax.js";
import { start } from "./brownian.js";
import {} from './form.js';
import { copyText } from "./common.js";

document.querySelectorAll('.project').forEach((el)=>{
    el.style.rotate = (Math.random()*2 - 1)+ 'deg';
})

addElementForParallax(document.querySelector('.header'),0.8);
addElementForParallax(document.querySelector('.projects'),0.1);

start();

document.querySelectorAll('.link-copybtn').forEach((ele)=>{
    const text = ele.getAttribute('data-text');
    ele.onclick = function (event){
        copyText(event,text);
    }
})