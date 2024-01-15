import { towerHeight,towerBasePos } from "./constants.js";

let fromTower = 0;
let toTower = 1;
export function listenToUserInput(window){
    window.addEventListener('dragstart',(ev)=>{
        console.log(window.innerHeight);
    });

    window.addEventListener('dragend',(ev)=>{
        console.log(ev.y,window.innerWidth);
    });
}

function calculateDragTowerPosition(x,y,window){
    window.innerHeight;window.innerWidth;
    //if we click on lower half of the screen then continue (thats where towers are)
    if(y>=window.innerHeight*0.5){
        //divide width space into 3 parts and see where we're dragging into that is our to tower

    }
}

export function stopListeningToUserInput(window){
    window.removeEventListener('dragstart');
}
