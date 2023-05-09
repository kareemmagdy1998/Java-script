// manipulate images using DOM object
var img_url = ['../images/marshall_bw.jpg','../images/marshall_c.jpg','../images/tiger.gif']
var current =0
var timer

function next() {
    if (current<2) {
        
        current+=1
    
    }
    else{
        current=0
    }
   
    document.images[0].src=img_url[current]
    clearInterval(timer)
}


function previous() {
    if (current==0) {
        
        current=2
    
    }
    else{
        current-=1
    }
   
    document.images[0].src=img_url[current]
    clearInterval(timer)  
}

function slide() {

    if (current<2) {
        
        current+=1
    
    }
    else{
        current=0
    }
    document.images[0].src=img_url[current]   
}


function sliding() {
    timer=setInterval(slide,650)
    
}

function stop() {

    clearInterval(timer)
    
}

