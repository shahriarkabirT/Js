 console.clear();
const btn = document.querySelector("button");

btn.addEventListener('click',()=>{


    fetch("http://127.0.0.1:5555/Practice/API-Calling/fetch%20API/text.txt")
    .then(res=>res.text())
    .then(data => {
        document.querySelector(".txt").innerHTML = data;
    });

    

});

