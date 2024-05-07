const drop = document.querySelector("#drop");
const p= document.querySelector("p");

p.addEventListener('dragstart',function(e){
e.dataTransfer.setData("Text",e.target.innerText);
});

drop.addEventListener("dragover",function(e){
  e.preventDefault();
});

drop.addEventListener("drop",function(e){
let id = e.dataTransfer.getData("Text");

drop.value = id;
e.preventDefault();
});


