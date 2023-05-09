// check if string is palidrome or not considering case sensetive or not
var str = prompt("enter your string")
var con = confirm("consider case sensetive")
var len = str.length

function pal(text,con,len) {
    
    if (con) {

        for (let i = 0; i < len/2; i++) {
    
           if (str[i]!==str[len-1-i]) {

            return"it is not a palindrom"
           } 
        }
            return"it is a palindrom"
    }
    
    else{
    
        str = str.toLowerCase
        for (let i = 0; i < len/2; i++) {
    
            if (str[i]!==str[len-1-i]) {
     
             return"it is not a palindrom"        
            } 
         }
    
     return"it is a palindrom"
    }
}

document.write( pal(str,con,len))

