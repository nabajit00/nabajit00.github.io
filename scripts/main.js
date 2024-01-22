import { copyText, openUrlInNewTab } from "./common.js"
import { errorPopup, successPopup } from "./popup.js";
import {} from './form.js';

document.querySelectorAll('.link-copybtn').forEach((element)=>{
    element.addEventListener('click',(event)=>{
        const text = element.getAttribute('data-text');
        copyText(event,text);
        successPopup("Copied "+ text);
    })
})