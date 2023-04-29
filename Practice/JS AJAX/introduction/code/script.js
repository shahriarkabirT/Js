
const display = document.querySelector("#btn");
display.addEventListener('click',getData);

  function getData(){  
    //create a new request 
    const xhr = new XMLHttpRequest();
    //what to do when response arrives
    xhr.onload = () =>{
     btn.innerHTML = xhr.responseText;
    }
    //prepare request 
    xhr.open("GET", "../data/data.txt");
    //request send
    xhr.send();
}