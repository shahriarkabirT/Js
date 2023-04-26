const mark = 91;



const promise = new Promise((resolve,reject)=>{
setTimeout(() => {
    if(mark>90){
    resolve("passed");
}
else{
    reject("failed");
}
}, 2000);

});

promise
    .then((value)=>{
       console.log(value);
    })
    .catch((err)=>{
        console.log(err);
    })

