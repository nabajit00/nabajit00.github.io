export function randomRangeInt(min,max) {
    //[min, max]
    return Math.round(randomRange(min,max));
}

export function randomRange(min,max){
    //[min, max]
    return (Math.random()*(max - min)) + min;
}

export async function wait(ms){
    return new Promise((res)=>{
        setTimeout(res,ms);
    })
}

export function copyText(event,text){
    const textarea = document.createElement('textarea');

    textarea.style.position = 'absolute';
    
    textarea.value = text;
    
    document.body.appendChild(textarea);
    
    textarea.select();
    
    document.execCommand('copy');
    
    document.body.removeChild(textarea);

    event.preventDefault();
}

export function openUrlInNewTab(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}