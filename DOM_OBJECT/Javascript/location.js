var data =location.search.substring(1,location.search.length)
var info= data.split('&')
var arr = []

for (let i = 0; i < info.length; i++) {

    arr[info[i].split('=')[0]]=info[i].split('=')[1];
    
}


 var selector = document.querySelectorAll("h1")

 selector[0].innerHTML +=arr['name']
 
 selector[1].innerHTML +=arr['mobile']
 
 selector[2].innerHTML +=arr['email']
 
 selector[3].innerHTML +=arr['address']

 