// simple task using the bom object in java script 
var win ;
var timer;
var win_2;

function moveWin(){
    win.moveBy(100,100)
    
    win.focus()
}

function stop() {
    clearInterval(timer)
    win.close()
    
}

function open_win() {

    win = open('../HTML/child.html','','width=200,height=200')
    timer=setInterval(moveWin,1000)
    

}

 function open_win_2(){

    win_2=open('../HTML/hello.html','','width=400,height=300')
    timing = setInterval(say_hello,500)

 }


var i =0;
function say_hello() {
    var str ="hello";
    if (i<str.length) {
        win_2.document.write(str[i]);
        i+=1  
    }
    else{

        clearInterval(timing)
        win_2.window.close()
    }  
}

