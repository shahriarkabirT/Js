// FocusEvent Object
//  <br>, <head>, <title>, <html>, <iframe>, <meta>, <param>, <script>, <style>, <base>, <bdo>, doesn't support

// 1. onblur
// 2. onfocus
// 3. onfocusin
// 4. onfocusout


var text = document.getElementById("textarea");


text.addEventListener("focus",function(){
  console.log("Focus is occured");
  text.style.backgroundColor = "orange";

});

text.addEventListener("blur",function(e){
  console.log("Blur is occured");
  text.style.backgroundColor = "white";
  text.value = e.target.value.toUpperCase();

  console.log(e.target.value);
});
