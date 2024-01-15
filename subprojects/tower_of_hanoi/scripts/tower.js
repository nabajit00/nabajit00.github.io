import { max_width,towerBasePos } from "./constants.js";
import { getData } from "./sharedData.js";

let disks = [[],[],[]];

export function getDisks() {
    return disks;
}

export function addDisk(element,towerNo) {
    disks[towerNo].push(element);
}

function removeDisk(towerNo){
    return disks[towerNo].pop();
}

function hasDisk(towerNo){
    return disks[towerNo].length>0;
}

function peekDisk(towerNo){
    return disks[towerNo][disks[towerNo].length-1];
}

function canWeMove(fromTower, toTower) {
    if(disks[toTower].length == 0) return true;
    if(disks[fromTower].length == 0) return false;
    return Number(peekDisk(fromTower).dataset.index)<Number(peekDisk(toTower).dataset.index);
}

let moves=[];
export function getMoveCount() {
    return {
        'total':moveCount,
        'remaining':moves.length
    }
}

export function moveDisk(fromTower,toTower){
    if(canWeMove(fromTower,toTower)){
        let movingDisk = removeDisk(fromTower);

        moves.push({
            'disk':movingDisk,
            'to':toTower,
            'height':disks[toTower].length
        });
        addDisk(movingDisk,toTower);  

        updateDiskGraphics();
    }
}

async function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

let makingMove = false;
async function updateDiskGraphics(){
    if(!makingMove && moves.length>0){
        makingMove = true;
        const move = moves.shift();
        let speed = getData('speed')/3;

        const movingDisk = move.disk;
        const toTower = move.to;
        const towerHeight = move.height;

        movingDisk.style.transitionDuration = speed+'ms';

        //Transition up 55vh -> left (calculated) -> down (calculated)
        
        const left = 0.5*(2*max_width-Number(movingDisk.style.width.split("vw")[0]))+toTower*max_width + 'vw';
        const down = towerBasePos + (towerHeight * getData('disk height')) + 'vh';

        movingDisk.style.bottom = '55vh';
        await wait(speed);

        movingDisk.style.left = left;
        await wait(speed);

        movingDisk.style.bottom = down;
        await wait(speed);

        makingMove = false;
        if(moves.length>0)
            updateDiskGraphics();
    }
}