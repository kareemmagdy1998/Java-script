// building simple calculator
var x;
var y;
var z;

 function EnterNumber(val) {

     document.getElementById("Answer").value += val
}

function EnterClear() {
    document.getElementById("Answer").value = ""
}

function EnterOperator(val) {

    document.getElementById("Answer").value += val   
}

function EnterEqual() {

    document.getElementById("Answer").value = do_operation()
}

function do_operation() {

    var res = document.getElementById("Answer").value
     console.log(res)
     x=document.getElementById("Answer").value= eval(res)
     return x

/*
     var res = document.getElementById("Answer").value.split(/(\w)/)
     console.log(res)
     
    x = parseInt(res[0]) 
    y = parseInt(res[2]) 

    if (res[1]=='+') {

        z=x+y        
    }

    if (res[1]=='/') {

        z= x /y
    }
    
    if (res[1]=='*') {

        z=x*y
        
    }

    if (res[1]=='-') {

        z=x-y
        
    }     
    return z

*/
    
}




    
