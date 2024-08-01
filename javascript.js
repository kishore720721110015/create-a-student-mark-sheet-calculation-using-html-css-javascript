
function add(){

var sub1=document.getElementById("sub1").value;
console.log(sub1);
var sub2=document.getElementById("sub2").value;
var sub3=document.getElementById("sub3").value;
var sub4=document.getElementById("sub4").value;
var sub5=document.getElementById("sub5").value;
var sub6=document.getElementById("sub6").value;
var sub7=document.getElementById("sub7").value;
var sub8=document.getElementById("sub8").value;


var p1=document.getElementById("p1").value;
var p2=document.getElementById("p2").value;
var p3=document.getElementById("p3").value;
var p4=document.getElementById("p4").value;
var p5=document.getElementById("p5").value;
var p6=document.getElementById("p6").value;
var p7=document.getElementById("p7").value;
var p8=document.getElementById("p8").value;

var add1,add2,add3,add4,add5,add6,add7,add8;

if(sub1=="XX"){
    add1=Number(p1);
}
else if(p1=="XX"){
    add1=Number(sub1);
}
else{
    add1=Number(sub1)+Number(p1);
}
if(sub2=="XX"){
    add2=parseInt(p2);
}
else if(p2=="XX"){
    add2=parseInt(sub2);
}else{
    add2=parseInt(sub2)+parseInt(p2);
}
if(sub3=="XX"){
    add3=parseint(p3);
}
else if(p3=="XX"){
    add3=parseInt(sub3);
}
else{
    add3=parseInt(sub3)+parseInt(p3);
}
if(sub4=="XX"){
    add4=parseInt(p4);
}
else if(p4=="XX"){
    add4=parseInt(sub4);
}
else{
    add4=parseInt(sub4)+parseInt(p4);
}
if(sub5=="XX"){
    add5=parseInt(p5);
}
else if(p5=="XX"){
    add5=parseInt(sub5);
}
else{
    add5=parseInt(sub5)+parseInt(p5);
}
if(sub6=="XX"){
    add6=parseInt(p6);
}
else if(p6=="XX"){
    add6=parseInt(sub6);
}
else{
    add6=parseInt(sub6)+parseInt(p6);
}
if(sub=="XX"){
    add7=parseInt(sub7);
}
else if(p7=="XX"){
    add7=parseInt(sub7);
}
else{
    add7=parseInt(sub7)+parseInt(p7);
}
if(sub8=="XX"){
    add8=parseInt(p8);
}
else if(p8=="XX"){
    add8=parseInt(sub8);
}
else{
    add8=parseInt(sub8)+parseInt(p8);
}

document.getElementById("s1-total").innerText=add1;
document.getElementById("s2-total").innerHTML=add2;
document.getElementById("s3-total").innerHTML=add3;
document.getElementById("s4-total").innerHTML=add4;
document.getElementById("s5-total").innerHTML=add5;
document.getElementById("s6-total").innerHTML=add6;
document.getElementById("s7-total").innerHTML=add7;
document.getElementById("s8-total").innerHTML=add8;

var total1=add1+add2+add3+add4+add5+add6+add7+add8;

document.getElementById("total").innerHTML=total1;

}