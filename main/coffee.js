function toggleFunction(){
    var x=document.getElementById("navbar");
    if(x.className==="navbar"){
        x.className += "responsive";
    }else{
        x.className ="topnav";
    }
}