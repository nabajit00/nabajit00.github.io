import { addData } from "./sharedData.js";

const values = [
    {
        'name':'count',
        'type':'number',
        'default':Math.round(Math.random()*3 + 3)
    },
    {
        'name':'speed',
        'type':'number',
        'default':100
    }
]

export function loadAllValues(){
    for(const value of values){
        const storedValue = localStorage.getItem(value.name);
        if(storedValue == null){
            addData(value.name,value.default);
        } else{
            switch (value.type) {
                case 'number':
                    addData(value.name,Number(storedValue));       
                    break;
                default:
                    addData(value.name,storedValue);
                    break;
            }
        }
    }
}

export function saveValue(key,value){
    localStorage.setItem(key,value);
}