

// try{
//     alert("hello");
// console.log(x);

// }
// catch(e){
// console.log(e.name);
// console.log(e.message);

// }
// finally{
//     alert("Bye");
// }


document.querySelector("#btn").addEventListener("click",()=>{
    const inputText = document.querySelector("#inputText").value;

    console.log(inputText);
    console.log(typeof inputText);
try{
    if(inputText<5){
        throw "Input is too low";
    }
    if(inputText>10){
        throw "Input is too high";
    }
}
catch(e){
    console.log(e);
}
})