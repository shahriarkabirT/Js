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