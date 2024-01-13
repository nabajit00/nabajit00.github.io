import { errorPopup, successPopup } from "./popup.js";

const url = 'https://docs.google.com/forms/d/e/1FAIpQLSeZp0vW2U0fmdf7QvzCMdhaUnm8aZYSxAtZOg82f75-fZPbfA/formResponse?&submit=Submit?usp=pp_url&entry.1437404930={EMAILADDR}&entry.236668435={MESSAGE}';;
const formEle = document.getElementById('contactform');

document.getElementById('contactform').addEventListener('submit',(ev)=>{
    let newUrl = url.replace('{EMAILADDR}',ev.target.email.value);

    newUrl = newUrl.replace('{MESSAGE}',formatMessage(ev.target.message.value));

    formEle.classList.toggle('disabled');

    fetch(newUrl).then((response)=>{
        afterResponse(ev.target.email,ev.target.message);
        console.log(response);
    }).catch((reason)=>{
        afterResponse(ev.target.email,ev.target.message);
        //errorPopup('Failed to send!');
        // console.log(reason);
    })

    ev.preventDefault();
    return false;
})

function afterResponse(email,msg){
    successPopup('Your message is sent');
    formEle.classList.toggle('disabled');
    email.value = '';
    msg.value = '';
}

function formatMessage(msg) {
    msg = msg.replaceAll(' ','+');
    return encodeURI(msg);
}