var input= new Array(10);
var inputValue= new Array(10);
for(var i =0 ; i< 9; i++){
input[i] = document.querySelectorAll('.sat')[i];
input[i].addEventListener("input", function() {
  inputValue[i] = input.value;
    console.log(inputValue[i]);
    
}
);
localStorage.setItem("saturday", JSON.stringify(inputValue));
}