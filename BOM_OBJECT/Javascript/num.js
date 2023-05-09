// fuvction takes string and returns the number of e's  in the string
var num = 0
function occur(x) {
    for (var i = 0; i < x.length; i++) {
       
        if (x[i]=="e") {
            num+=1   
        }
        else{

            continue
        }
    }

    return num;
}

var str = prompt("enter your string")
document.write(occur(str))