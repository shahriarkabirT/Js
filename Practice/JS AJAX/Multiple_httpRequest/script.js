
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
btn.addEventListener("click" , getData); 
btn2.addEventListener("click" , sendData);


function sendRequest(method,url,data){

  const promise = new Promise(function(resolve, reject){
  
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
     callbackFunction(xhr);
    }
    xhr.open(method, url);
    xhr.send();

  });
    return promise;
}

function getData(){
  sendRequest("GET","https://jsonplaceholder.typicode.com/todos/test");
}
function sendData() {

  
}