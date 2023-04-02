const promise1 = new Promise((resolve, reject) =>{
    resolve("promise1 is resolved");
})
const promise2 = new Promise((resolve, reject)=>{
    resolve("promise2 is resolved");
})


promise1.then((res)=>console.log(res));

promise2.then((res)=>console.log(res))
