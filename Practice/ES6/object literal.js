const car = {
    wheel : "4" ,
    colour : "red",
    price : 1000 ,
  //  version : function(x,y){      one way

    version(x,y){                // concise way
        return {
            x,
            y
        }
    }
};

console.log(car.colour);

console.log(car.version("2.0","3.8"));

//using space for naming a function

let x = {
   'function space'(){
  
   return "it has space between function name";
}

}
console.log(x['function space']());
