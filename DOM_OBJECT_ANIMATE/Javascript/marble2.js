// building animation using native java script
var i=0
var one="../images/marble1.jpg"
var two= "../images/marble2.jpg"
var three= "../images/marble3.jpg"
var timer
var timer_c
function high() {

    for (let i = 0; i < document.images.length; i++) {
        document.images[i].src=three
        
    }  
}

function low() {

    for (let i = 0; i < document.images.length; i++) {
        document.images[i].src=one
        
    }
}

function mid() {
    
    for (let i = 0; i < document.images.length; i++) {
        document.images[i].src=two
        
    }
}

function slide() {

setTimeout(high,100)

setTimeout(low,1000)

setTimeout(mid,2000) 
}

function show() {

    timer=setInterval(slide,3000)
}


function high_c() {

    document.getElementById("change").src=three   
}

function low_c() {

    document.getElementById("change").src=one
}

function mid_c() {
    
    document.getElementById("change").src=two
}


function slide_c() {

    setTimeout(mid_c,100)
    
    setTimeout(high_c,1000)
    
    setTimeout(low_c,2000)
    }

    function show_c() {

        timer_c=setInterval(slide_c,3000)
    }

    function final() {

        show()
        show_c()
    }

    function on() {

        clearInterval(timer)
        clearInterval(timer_c)  
    }

    for(var i =0 ;i<document.images.length;i++){
        document.images[i].onmouseover =  on
        document.images[i].onmouseout = final
    }
