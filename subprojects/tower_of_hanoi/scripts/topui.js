import {addData} from './sharedData.js';

const moveMsg = document.getElementById('msg');
const bottomMsg = document.getElementById('bottom-msg');
const countElement = document.getElementById('count');

export function showNumberOfMoves(noOfMoves,time) {
    moveMsg.innerHTML = "Number of moves = "+noOfMoves;
    
    let unitOfTime = 'ms';
    if(time>1000){
        time = time/1000;
        unitOfTime = 's';
    }
    time = time.toPrecision(2);

    bottomMsg.innerHTML = "Algorithm is done calculating moves in "+time + unitOfTime +", enjoy the animation!";
    bottomMsg.style.visibility = "visible";
}

export function calculationStartedMessage(){
    moveMsg.innerHTML = "Calculating Moves...";
}

export function disbleAutoPlayArea(){
    const autoPlayArea = document.getElementsByClassName('autoplay-ui')[0];
    autoPlayArea.classList.add('disabled-ui');
}

countElement.addEventListener('change',(ev)=>{
    addData('count',Number(ev.target.value));
})