var inputValue ;
function getInputValue() {
    var input = document.getElementById("8.30");
     inputValue = input.value;
    console.log(inputValue);
  }

  localStorage.setItem("830sat",inputValue);
  console.log(inputValue);