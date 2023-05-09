// create animation using native javascript
function one(){
    console.log( icon_1 = document.images[0].style.left )
    var icon= getComputedStyle(document.getElementById("one"))
    var left = parseFloat(icon.left)
    document.getElementById("one").style.left = (left + 20)+"px"
    if(left > 490){
        document.images[0].style.left = "0px"
    }
}


function two() {

    console.log( icon_2=document.images[1].style.right )
    var icon= getComputedStyle(document.getElementById("two"))
    var right = parseFloat(icon.right)
    document.getElementById("two").style.right = (right + 20)+"px"
    if(right > 490){
        document.images[1].style.right = "0px"
    }
}



function three() {

    console.log(top_3 = document.images[2].style.bottom )
    var icon= getComputedStyle(document.getElementById("top"))
    var bottom = parseFloat(icon.bottom)
    document.getElementById("top").style.bottom = (bottom + 20)+"px"
    if(bottom > 490){
        document.images[2].style.bottom = "0px"
    }
}

function play() {

one()
two()
three()

var selector = document.querySelectorAll("h2")

selector[0].innerHTML = icon_1
selector[1].innerHTML = icon_2
selector[2].innerHTML = top_3
    
}

function repeat() {

     timer = setInterval(play,200)
}

function reset() {
    if (document.getElementById("change").value=="stop") {


        document.images[0].style.left = "0px"
        document.images[1].style.right = "0px"
        document.images[2].style.bottom = "0px"
    
        clearInterval(timer)
    
        repeat()   
    }
    else{

        document.getElementById("change").value="stop"
        document.images[0].style.left = "0px"
        document.images[1].style.right = "0px"
        document.images[2].style.bottom = "0px"
    
        clearInterval(timer)
    
        repeat()
    }
}

function stop() {

    if (document.getElementById("change").value=="stop") {

        clearInterval(timer)

        document.getElementById("change").value="go"   
    }

    else{

        repeat()
        
        document.getElementById("change").value="stop"
    }   
}

repeat()

    var icon_1 
    var icon_2 
    var top_3 

