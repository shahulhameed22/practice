function f1(){
    a=document.getElementById("m1").value;
    c=document.getElementById("h");
       if(a.length<6){
        c.innerHTML=("your first name want to more than 6 letters")
        // alert("your first name want to more than 6 letters");

    }
    else{
        document.write("success");
    }
}
function f2(){
    b=document.getElementById("m2").value;
    m=document.getElementById("v");

    if(b.length<6){
        m.innerHTML=("your last also want be more than 6 letter");
        // alert("your last name also want be more than 6 letters");
    }
    else{
        alert("success");
    }



}
function f3(){
    c=document.getElementById("m1").value;
    d=document.getElementById("m2").value;

    alert(c+d);
    
}
 function f4(){
    e=document.getElementById("m4");
    j=document.getElementById("h")
    document.write("Process Done"+a+b);

}




 