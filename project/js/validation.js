function check(){
    var a=document.getElementById('max1').value;
    const d= new Date (a);
    const d1= new Date (a);
    d.setDate(d.getDate()+5);
    d1.setDate(d1.getDate()-5);
    var b=document.getElementById('max3').value=d;
    var c=document.getElementById('max4').value=d1;

}