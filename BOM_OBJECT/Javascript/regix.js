// simple validation using regulare expressions 
var n_ame;
var phone;
var mobile;
var email;
var re;

function nam() {
    do {
        n_ame = prompt("enter your name")
        if (isFinite(n_ame)) {
            alert("please enter string")
            
        }
        else{
            continue;
        }
            
        } while (isFinite(n_ame));
    
}


function phone() {

    
do {
    phone = prompt("enter your phone")
    if (isFinite(phone)&& phone.length>7) {
        continue
        
    }
    else{
        alert("please enter at least 8 numbers")
    }
        
    } while (!isFinite(phone)||phone.length<8);
}

function mobile() {

    do {
        mobile = prompt("enter your mobile number")
        re= /^(010|011|012)[0-9]/;

        if (re.test(mobile)&& mobile.length==11) {
            continue
            
        }
        else{
            alert("invalid mobile number")
        }
            
        } while (!re.test(mobile)||mobile.length!==11);
}



function email() {

    do {
        email = prompt("enter your email")
        re= /[a-z]*[0-9]*@([a-z]*\.com)$/;

        if (re.test(email)){

            continue
            
        }

        else{
            alert("invalid email address")
        }
            
        } while (!re.test(email));
}

function p_info(){

    nam();
    phone();
    mobile();
    email();

    var choose= prompt("enter color of font")
    var data= "Welcome dear guest " + n+"<br>"+"your phone number is : "+phone+"<br>"+"your mobile number is : "+mobile+"<br>"+"your email is : "+email
    var color= "<p style = \" color: "+choose+ "\"> "+data +"</p>"
    document.write(color)
}

p_info();
        
       

    
     
  






