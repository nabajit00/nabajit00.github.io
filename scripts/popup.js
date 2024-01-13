import { wait } from "./common.js";

const popupbox = document.querySelector('.popup');
const popupmsg = document.querySelector('.popup>span')
const popupstatus = document.querySelector('.popup .status');

const animationDuration = 200; //ms

let messages = [];

let showingPopup=false;

async function showPopup(){
    if(showingPopup || messages.length==0){
        return;
    }
    showingPopup = true;

    const popMsg = messages.pop();

    popupstatus.style.backgroundColor = (popMsg.status == 'success')?'#03A9F4':'red';
    popupmsg.innerText = popMsg.msg;

    popupbox.style.transform = 'translateY(0px)';
    await wait(2000);
    popupbox.style.transform = 'translateY(100px)';
    await wait(200);
    showingPopup = false;
    showPopup();
}

export function successPopup(msg){
    messages.push({'msg':msg,status:'success'});
    showPopup();
}

export function errorPopup(msg){
    messages.push({'msg':msg,status:'error'});
    showPopup();
}
