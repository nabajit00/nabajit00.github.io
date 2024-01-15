/**
 * Auto solver
 */
import { moveDisk } from "./tower.js";
import { calculationStartedMessage, showNumberOfMoves } from "./topui.js";

let noOfMoves = 0;
async function playHanoiRec(disks,positions,fromTower,toTower,tmpTower) {

    if(positions[fromTower]>0){
        positions[fromTower]--;
        playHanoiRec(disks,positions,fromTower,tmpTower,toTower);
        positions[tmpTower]++;


        moveDisk(fromTower,toTower);
        noOfMoves++;
        
        positions[tmpTower]--;
        playHanoiRec(disks,positions,tmpTower,toTower,fromTower);        
        positions[toTower]++;
    }
}


export function playHanoi(disks) {
    noOfMoves = 0;
    calculationStartedMessage();
    setTimeout(()=>{
        const startTime = performance.now();
        playHanoiRec(disks,[disks[0].length,0,0],0,2,1);
        showNumberOfMoves(noOfMoves,performance.now() - startTime);
    },1)
}