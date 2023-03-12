var date = new Date();
console.log(date);

var day= date.getDay();
var hour=date.getHours();
var minute = date.getMinutes();
var sec= date.getSeconds();


if(day==6)  //saturday //08:30-9:30
{
    document.querySelectorAll(".sub")[0].innerHTML="ENG 250 | Room:708";       
    document.querySelectorAll(".sub")[1].innerHTML="CSC 348 | Comlab6";
    document.querySelectorAll(".sub")[2].innerHTML="CSC 348 | Comlab6";       
    document.querySelectorAll(".sub")[3].innerHTML="CHM 117 | Room:803";    
    
    document.querySelectorAll(".sec")[0].innerHTML="A";       
    document.querySelectorAll(".sec")[1].innerHTML="B";  
    document.querySelectorAll(".sec")[2].innerHTML="B";  
    document.querySelectorAll(".sec")[3].innerHTML="B";  

    document.querySelector(".rotated-text").innerHTML="Saturday ";   
}

if(day==0)  //sunday
{
  
    document.querySelectorAll(".sub")[1].innerHTML="CSC 307 | Room:	907";  
    document.querySelectorAll(".sub")[3].innerHTML="CHM 117 | Room: 803";
     
    document.querySelectorAll(".sec")[1].innerHTML="A";    
    document.querySelectorAll(".sec")[3].innerHTML="B";  

    document.querySelector(".rotated-text").innerHTML="Sunday";   

}
if(day==1) //monday
{
    document.querySelectorAll(".sub")[0].innerHTML="ENG 250 | Room:708";       //08:30-9:30  
    document.querySelectorAll(".sub")[1].innerHTML="CSC 307 | Room:903";       
    document.querySelectorAll(".sub")[2].innerHTML="CSC 347 | Room:	605";  
    document.querySelectorAll(".sub")[3].innerHTML="CHM 117 | Room:	803";

    document.querySelectorAll(".sec")[0].innerHTML="A";  
    document.querySelectorAll(".sec")[1].innerHTML="A";  
    document.querySelectorAll(".sec")[2].innerHTML="B";  
    document.querySelectorAll(".sec")[3].innerHTML="B";  

    document.querySelector(".rotated-text").innerHTML="Monday"; 
}

if(day==2) //tuesday
{
    document.querySelectorAll(".sub")[0].innerHTML="ENG 250 | Room:708";
    document.querySelectorAll(".sub")[1].innerHTML="CSC 307 | Room:909";  
    document.querySelectorAll(".sub")[2].innerHTML="CSC 347 | Room:608";
    
    document.querySelectorAll(".sec")[0].innerHTML="A";  
    document.querySelectorAll(".sec")[1].innerHTML="A";  
    document.querySelectorAll(".sec")[2].innerHTML="B";  

    document.querySelector(".rotated-text").innerHTML="Tuesday"; 
}

if(day==3) //wednesday
{
    document.querySelectorAll(".sub")[2].innerHTML="CHM 118 | CHMlab";      
    document.querySelectorAll(".sub")[3].innerHTML="CHM 118 | CHMlab";

    document.querySelectorAll(".sec")[2].innerHTML="B";  
    document.querySelectorAll(".sec")[3].innerHTML="B";  

    document.querySelector(".rotated-text").innerHTML="Wednesday"; 
}
if(day==4)
{
    document.querySelector(".rotated-text").innerHTML="Thursday"; 
}

if(day==5)
{

    document.querySelector(".rotated-text").innerHTML="Friday"; 
}