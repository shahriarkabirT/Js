
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
btn.addEventListener("click" , getData); 
btn2.addEventListener("click" , sendData);


function sendRequest(method,url,data){

  const promise = new Promise(function(resolve, reject){
  
    const xhr = new XMLHttpRequest();

    
    xhr.onload = () => {
      if(xhr.status>=400){
        reject(`There was an application error and the error status is ${xhr.status}`);
      }
      else{
        resolve(xhr.response);
      }
     
    }

    xhr.onerror = () => {
      reject("There was an error");
    }  
   xhr.open(method, url);
    xhr.send(data);

  });
    return promise;
}

function getData(){
  sendRequest("GET","https://jsonplaceholder.typicode.com/pots/1")
  .then(res=>{console.log(res)})
  .catch(err => console.log(err));
}
function sendData() {
  sendRequest("POST", "https://jsonplaceholder.typicode.com/posts",{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(res =>  console.log(res))
  .catch(err => console.log(err));

  
}