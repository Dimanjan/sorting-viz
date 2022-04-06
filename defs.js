
let COLOR={
    active:'steelblue',
    touched:'white',//white
    untouched:'grey',//grey
    compare:'red',//red
    selected:'yellow',//yellow
    finalised:'green',//green


}
let SETTINGS={
    speed:5,
    noOfBars:20,
    width:document.body.clientWidth * 0.9,
    height:document.body.clientHeight * 0.5,
}

let TIME={
    delay:80*SETTINGS.speed,
    swapdelay:10*SETTINGS.speed,
    comparedelay:40*SETTINGS.speed,
    finalisedelay:20*SETTINGS.speed,
}

let SELECTIONSORT={
    selectedIndex:0,
}

let QUICKSORT={
    prePivot:0,
    postPivot:SETTINGS.noOfBars-1,
}

UPDATEB={
    delaystamp:0,
}

let BARS=[]

function setColor(id,color){
    d3.select('#bar'+id)
        //.transition()
        //.delay(UPDATEB.delaystamp)
        .style('fill',color);
}
