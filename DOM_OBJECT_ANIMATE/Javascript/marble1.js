// building animation using native java script
var img_1="../images/marble1.jpg"
var img_2="../images/marble3.jpg"
var i =0;

var timer
function inter() {

if (i==document.images.length) {
    i=0
document.images[4].src=img_1
}
else{

    i+=1
}

document.images[i].src=img_2
document.images[i-1].src=img_1    
}

function slide() {

    timer=setInterval(inter,500)    
}


function on() {

    clearInterval(timer)    
}

    for(var i =0 ;i<document.images.length;i++){
        document.images[i].onmouseover =  on
        document.images[i].onmouseout = slide
    }
    
