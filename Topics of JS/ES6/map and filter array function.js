let tasin = [4,5,4,5];

let rahim = tasin.map(function(x){
    return x+5;
});

let karim = tasin.filter(function(x){
    return x < 10;
})

console.log(karim);