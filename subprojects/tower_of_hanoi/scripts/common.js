export function clamp(val,min,max) {
    if(val<min)
        return min;
    if(val>max)
        return max;
    return val;
}

export function colorInterpolate(color1,color2,fraction){
    return [
        clamp((color2[0] - color1[0])*fraction + color1[0],0,255),
        clamp((color2[1] - color1[1])*fraction + color1[1],0,255),
        clamp((color2[2] - color1[2])*fraction + color1[2],0,255),
    ]
}