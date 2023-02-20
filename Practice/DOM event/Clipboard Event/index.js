const input = document.querySelector("input[name=clipboardEvent]");

input.addEventListener("copy",function(e){
  console.log("you have copied");
});
input.addEventListener("cut",function(e){
  console.log("you have cut");
});
input.addEventListener("paste",function(e){
  console.log("you have pasted");
});

