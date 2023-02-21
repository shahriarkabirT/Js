function changeName(x){
    x.innerHTML="Shahriar Kabir";
}
document.getElementById("n").innerHTML = "hi";
document.getElementsByClassName("demo")[0].innerHTML = "Got element by class name";


//adding new element (adding tag)


var heading = document.createElement("p");

var text = document.createTextNode("This is from added element ")

heading.appendChild(text);

document.getElementsByClassName("my_class")[0].appendChild(heading);


//Dom mouse event
console.clear();
var mousedom = document.querySelector(".mouse");
/*
mousedom.addEventListener("click",function(){
  console.log("Mouse clicked");
 });
 mousedom.addEventListener("dblclick",function(){
     console.log("Mouse double clicked");
 });
 mousedom.addEventListener("mousedown",function(){
        console.log("Mouse down");
 });
 mousedom.addEventListener("mouseup",function(){
     console.log("Mouse up");
 });
 mousedom.addEventListener("mouseenter",function(){
 console.log("Mouse enter");
 });
 mousedom.addEventListener("mouseleave",function(){
     console.log("Mouse leave");
    // console.clear();
 });
 mousedom.addEventListener("mouseover",function(){
    console.log("Mouse over");
    
 });

 mousedom.addEventListener("mousemove",function(e){
    console.log("Mouse move");
    console.log("CientX = "+ e.clientX + " ClientY = "+ e.clientY);
    console.log("OffsetX = "+ e.offsetX + " Offset Y = " + e.offsetY);
 });
*/
mousedom.addEventListener("click", function(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.innerHTML);
    console.log(e.target.textContent);
});
 //<!--input box and change event-->


var input = document.querySelector("input[name=input-name]");

input.addEventListener("change",changeHandler);

function changeHandler(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.innerHTML);
    console.log(e.target.textContent);
}

//checkbox with addlistener

var programs = document.querySelectorAll("input[name=program]");
console.log(programs);

Array.from(programs).map((p)=>{
p.addEventListener("change",programHandler);

});

function programHandler(e){
    if(e.target.checked){
    console.log("checked");
    console.log(e.target.value);
}
}
//select with addlistener

var selector = document.querySelector('#department');

selector.addEventListener("change", deptHandler);

function deptHandler(e){
   console.log(e.target.value);
}

const buttons = document.querySelectorAll('.btn');

console.log(buttons);


//buttons with event listener and map

Array.from(buttons).map((button)=>{
    button.addEventListener("click",function(e){
        console.log(e.target.innerHTML);
    });
});

