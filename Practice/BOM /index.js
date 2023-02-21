var inputValue ;
function getInputValue() {
    var input = document.getElementById("8.30");
     inputValue = input.value;
    console.log(inputValue);
    alert("The input value is: " + inputValue);
  }

  localStorage.setItem("830sat",inputValue);