export const max_width = 25; //in vw
export const min_width = 5; //in vw

export const max_height=4;// in vh

export const towerHeight = 49; //in vh
export const towerBasePos = 5;//in vh

export const goalTower = 3;

export const colors = [
    {'start':[128, 188, 189],'end':[213, 240, 193]},
    {'start':[6,70,124],'end':[154,222,231]},
    {'start':[171, 70, 210],'end':[255, 111, 181]},
    {'start':[113, 201, 206],'end':[227, 253, 253]},
    {'start':[255, 146, 146],'end':[255, 232, 232]},
    {'start':[113, 29, 176],'end':[239, 64, 64]},
    {'start':[31, 171, 137],'end':[157, 243, 196]},
    {'start':[35, 45, 63],'end':[0, 129, 112]},
    {'start':[198, 61, 47],'end':[255, 155, 80]},
    {'start':[123, 102, 255],'end':[197, 255, 248]},
]


const colorPos = Math.round(Math.random()*(colors.length - 1));
export const startColor = colors[colorPos].start;
export const endColor = colors[colorPos].end;
