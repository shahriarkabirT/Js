let payment = true;
let mark = 90;


function enroll (){

    console.log("Course enrolment.....");
const promise = new Promise((resolve,reject)=>{
    setTimeout(function(){
    if(payment){
        console.log("course enrolment is done.");
        resolve();
    }
    else{
        reject("Course enrolment is failed!!");
    }
    },2000)
});
return promise;
}
function processing(){
    console.log("Course is processing....");
    const promise = new Promise((resolve,reject)=>{
    setTimeout(function(){
    if(mark>=80){
        resolve();
    }
    else{
        reject("You are an idiot");
    }
    },2000);

    });
    return promise;
}
function getCirtificate(){
    const promise = new Promise((resolve)=>{

    setTimeout(function(){
       resolve("Congo, You are cirtified");
        },2000);
});
return promise;
}


enroll()
    .then(processing)
    .then(getCirtificate)
    .then((value)=>{
        console.log(value);
    })
    .catch((err)=>{
        console.log(err);
    })