/*
  function getData(){  
    const xhr = new XMLHttpRequest();
    xhr.onload = () =>{
     console.log(JSON.parse(xhr.response));
    }
    xhr.open("GET", "data.txt");
    xhr.send();
}
*/
//in other concise way

async function getData(){
    const response = await fetch("data.txt");
    const data = await response.json();
    console.log(data);
    console.log(data.name);

}

