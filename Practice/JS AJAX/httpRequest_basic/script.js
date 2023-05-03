
const display = document.querySelector("#btn");
display.addEventListener('click',()=>{
  getData("../data/data.txt");
});

  function getData(url){  
    //create a new request 
    const xhr = new XMLHttpRequest();
    //what to do when response arrives
    xhr.onload = () =>{
     btn.innerHTML = xhr.responseText;
    }
    //prepare request 
    xhr.open("GET", url);
    //request send
    xhr.send();
}