import * as constant from "./constants.js";
import { colorInterpolate,clamp } from "./common.js";
import { addDisk, getDisks } from "./tower.js";
import { addData } from "./sharedData.js";
import {listenToUserInput} from "./dragndrop.js"
import { playHanoi } from "./hanoi.js";
import { loadAllValues } from "./valueLoader.js";
import { disbleAutoPlayArea } from "./topui.js";

const disksHolder = document.getElementsByClassName("disks")[0];

function instantiateDisk(width,leftVal,bottomVal,height,index){
    let element = document.createElement('div');
    element.style.left = leftVal+'vw';
    element.style.width = width + 'vw';
    element.style.bottom = bottomVal+'vh';
    element.style.height = height+'vh';
    element.className = 'disk';

    let color = colorInterpolate(constant.startColor,constant.endColor,1-(width/constant.max_width));

    element.style.backgroundColor = 'rgb('+color[0]+", "+color[1]+", "+color[2]+")";

    element.dataset.index = index;

    addDisk(element,0);

    disksHolder.appendChild(element);
}

function generateAllDisks(count) {
    const stepVal = (constant.max_width - constant.min_width)/(count+1);
    let currentWidth = constant.max_width;
    let currentBottomVal = constant.towerBasePos;

    const height = clamp(constant.towerHeight/count,0,3.6);
    addData('disk height',height);
    for(let i=0;i<count;i++){
        //generate disks here (max to min witdth)
        instantiateDisk(currentWidth,0.5*(2*constant.max_width-currentWidth),currentBottomVal,height,count-i);
        currentBottomVal = (currentBottomVal + height);
        currentWidth = currentWidth - stepVal;
    }
}

loadAllValues();

generateAllDisks(Math.round(Math.random()*14 + 2));

listenToUserInput(window);

document.getElementById("autoplay").addEventListener('click',()=>{
    disbleAutoPlayArea();
    playHanoi(getDisks());
})

document.getElementById("speed").addEventListener('change',(ev)=>{
    addData('speed',3005 - Number(ev.target.value));
})

document.getElementById("reset").addEventListener('click',()=>{
    location.reload();
})