const display = document.querySelector("#btn");
display.addEventListener('click',()=>{
  getData("../data/data.txt");
});

  function getData(url){  
    //create a new request 
    const xhr = new XMLHttpRequest();
    //what to do when response arrives
    xhr.onload = function() {
     btn.innerHTML =this.responseText;
     console.log(this.getAllResponseHeaders());
     console.log(this.getResponseHeader("date"));
    }
    //prepare request 
    xhr.open("GET", url);   //3rd parameter as false means syncronous
    //request send          //use random value so that it doesn't provide cashed value
    xhr.send();
}
