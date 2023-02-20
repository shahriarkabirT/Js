// KeyboardEvent Object
// 1. Keydown - pressing a key, can repeat
// 2. keypress (may not supported by some browsers)
// 3. keyup
// some properties - key, keyCode, code, shiftKey, ctlKey, repeat


var text = document.getElementById("textarea");
text.addEventListener("keydown",function(){
console.log("keydown");
});

text.addEventListener("keyup",function(){
console.log("keyup");
});

  
text.addEventListener("keypress",function(){
  console.log("keypress");
  });
  console.clear();