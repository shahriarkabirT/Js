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
const div = document.querySelector(".mouse");

// div.addEventListener("click",function(){
//     console.log("Mouse clicked");
// });
// div.addEventListener("dblclick",function(){
//     console.log("Mouse double clicked");
// });
// div.addEventListener("mousedown",function(){
//     console.log("Mouse down");
// });
// div.addEventListener("mouseup",function(){
//     console.log("Mouse up");
// });
// div.addEventListener("mouseenter",function(){
//     console.log("Mouse enter");
// });
// div.addEventListener("mouseleave",function(){
//     console.log("Mouse leave");
// });
// div.addEventListener("mouseover",function(){
//     console.log("Mouse over");
// });
// div.addEventListener("mousemove",function(e){
//     console.log("Mouse move");
//     console.log("CientX = "+ e.clientX + " ClientY = "+ e.clientY);
//     console.log("OffsetX = "+ e.offsetX + " Offset Y = " + e.offsetY);
// });


