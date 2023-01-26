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