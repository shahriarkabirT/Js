
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
btn.addEventListener("click" ,()=>{getData("../data/data.txt", myFunction1);}); 
btn2.addEventListener("click" ,()=>{getData("../data/data2.txt", myFunction2);});

  function getData(url,callbackFunction){  
    const xhr = new XMLHttpRequest();
    xhr.onload = () =>{
     callbackFunction(xhr);
    }
    xhr.open("GET", url);
    xhr.send();
}
function myFunction1(xhr){
  const display = document.querySelector(".text1");
  display.innerHTML = xhr.responseText;
}
function myFunction2(xhr) {
  const display2 = document.querySelector(".text2");
  display2.innerHTML = xhr.responseText;
}