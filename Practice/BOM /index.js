//BOM(Browser Object Model)

                                            //window object
                                            //location object
console.clear();
console.log(window);
console.log(window.location);

//href
console.log(location.href);
//protocol
console.log(location.protocol);
//host name
console.log(location.hostname);

//port
console.log(location.port);
//pathname
console.log(location.pathname);

var locationdiv = document.querySelector(".location-div");
//display contents 
var p1 = locationdiv.children[0];

p1.textContent = location.href;

var p2 = locationdiv.children[1];
p2textContent = location.href;

var p3 = locationdiv.children[2];
p3.textContent = location.port;

var p4 = locationdiv.children[3];
p4.textContent = location.hostname;

var p5 = locationdiv.children[4];
p5.textContent = location.pathname;


//assign a link in a button 
var btn = document.getElementById("visit-button");


btn.addEventListener("click",function(){
    location.assign("https://www.google.com");
});



                    //pop up boxes - alert , confirm, prompt  

//alert("error");

// function deleteSomething(){
//     let value = confirm("Are you sure?");            //these are codes in the comment

//     if(value) console.log("sure");
//     else console.log("canceled");
// }

// deleteSomething();

//prompt and create element
/*function welcome(){

    var h1 = document.createElement("h1");
    var text ; 
   var name = prompt("Enter your name:"); 
    if(name== null || name ==""){
        text = "NO name found";
    }
    else{
        text = name;
    }
   
    var textNode=document.createTextNode(text);

    h1.appendChild(textNode);
    document.body.appendChild(h1);
}

welcome();
*/


                    //Browser Object Model | Timing events
/*
var timeout = document.querySelector(".text");


setTimeout(() => {
    timeout.textContent = "this will be arrived after two seconds"; 
}, 2000 );

setTimeout(() => {
    timeout.textContent = "this will be arrived after 4 seconds";
}, 4000 );

setTimeout(() => {
    timeout.textContent = "It will be vanished after 8 seconds";
}, 6000 );

setTimeout(() => {
    timeout.textContent = "";
}, 8000 );

*/

                //SetInterval
//  var strt = document.getElementById("strt");

//                 var hour = document.querySelector(".hour");
//                 var minute = document.querySelector(".minute");
//                 var second = document.querySelector(".second");
// var secondCount = 0; 
// var minuteCount = 0;
// var hourCount = 0 ;
// strt.addEventListener('click',function(){

// setInterval(() => {
//     secondCount++;
//     if(secondCount==60) secondCount = 1;
//     second.textContent = secondCount;
// }, 1000);

// setInterval(() => {
//     minuteCount++;

//     minute.textContent = minuteCount;
// }, 60000);

// setInterval(() => {
//     hourCount++;

//     hour.textContent = hourCount;
// }, 3600000);

// });







const showTime = document.querySelector(".showTime");
const shownTime = document.querySelector(".localTime")

showTime.addEventListener("click",()=>{


    setInterval(() => {
    
  let time = new Date();
let hour = time.getHours();
let minute = time.getMinutes();
let second = time.getSeconds();

hour =formatTime(hour);
minute= formatTime(minute);
second = formatTime(second);



let Time = hour + ": " + minute + ": " + second ;
     shownTime.textContent = Time;
    }, 1000);



});

function formatTime(value){
if(value<10) {
    value = "0"+value;
}

return value;
}