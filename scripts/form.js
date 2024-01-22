import { errorPopup, successPopup } from "./popup.js";

const url = 'https://docs.google.com/forms/d/e/1FAIpQLSeZp0vW2U0fmdf7QvzCMdhaUnm8aZYSxAtZOg82f75-fZPbfA/formResponse?&submit=Submit?usp=pp_url&entry.1437404930={EMAILADDR}&entry.236668435={MESSAGE}';;
const formEle = document.querySelector('.contactme-form');
const submitBtn = document.querySelector('.contactme-form .primary-btn');

formEle.addEventListener('submit',async (ev)=>{
    ev.preventDefault();
    
    let response;
    try {
        response = await grecaptcha.getResponse();
    } catch (error) {
        errorPopup("Failed to verify captcha");
        return false;
    }
    if(response.length == 0){
        errorPopup("Please verify the captcha");
        return false;
    }

    let newUrl = url.replace('{EMAILADDR}',ev.target.email.value);

    newUrl = newUrl.replace('{MESSAGE}',formatMessage(ev.target.message.value));

    toggleDisabledOnChildren(ev.target.email,ev.target.message);

    fetch(newUrl).then((response)=>{
        (!response.ok)?
        afterSuccessResponse(ev.target.email,ev.target.message):
        afterErrorResponse(ev.target.email,ev.target.message);
    }).catch((reason)=>{
        if("TypeError: Failed to fetch" == String(reason)){
            afterSuccessResponse(ev.target.email,ev.target.message);
        } else{
            afterErrorResponse(ev.target.email,ev.target.message);
        }
    })

    return false;
})

const formDialog = document.querySelector('.formDialog');

document.querySelector('#contactme-btn').addEventListener('click',()=>{
    toggleFormModal();
})

document.querySelector('#formclose-btn').addEventListener('click',()=>{
    toggleFormModal();
})

let dialogOpen = false;
function toggleFormModal(){
    dialogOpen = !dialogOpen;
    (dialogOpen)?formDialog.showModal():formDialog.close();
}

function afterSuccessResponse(email,msg){
    successPopup('Your message is sent');
    toggleDisabledOnChildren(email,msg);
    email.value = '';
    msg.value = '';
}

function afterErrorResponse(email,msg){
    errorPopup('Error sending message');
    toggleDisabledOnChildren(email,msg);
}


function formatMessage(msg) {
    msg = msg.replaceAll(' ','+');
    return encodeURI(msg);
}

function toggleDisabledOnChildren(email,msg){
    email.classList.toggle('disabled');
    msg.classList.toggle('disabled');
    submitBtn.classList.toggle('disabled');
}