const promise = new Promise((resolve, reject) => {
    let complete = true;
    if(!complete){
        resolve("I am from resolve");
    }
    else{
        reject("I am from reject");
    }

});


promise
.then(function f1(res){
    console.log(res);
})
.catch(function f2(res){
    console.log(res);
})
.finally((res)=>{
    console.log("I am from finally");
})

