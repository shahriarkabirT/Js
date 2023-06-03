let str = [4,5,6]
console.log(str);
for(let i = 0 ; i< str.length ; i++){
console.log(str[i]);
}

str.forEach(myfunction);

function myfunction(value, index , arr){
    arr[index] = value + 5;
}


//annonymous function 

str.forEach(function(x){
    console.log(x);
});

//pushing into an empty array

let empty_array = [];

str.forEach(function(x){
    empty_array.push(x*x);
})

console.log(empty_array);

