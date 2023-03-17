let payment = true;
let mark = 80;


function enroll (callback){
    console.log("Course enrolment.....");

    setTimeout(function(){
    if(payment){
        console.log("Course enrolment is done.");
    callback();
    }
    else{
        console.log("Course enrolment is failed!!");
    }
    },2000)
}
function processing(callback){
    console.log("Course is processing....");
    setTimeout(function(){
    if(mark>=80){
        callback();
    }
    else{
        console.log("You are an idiot");
    }
    },2000)
   
}
function getCirtificate(){
    console.log("You have passed");
}


enroll(function(){
    processing(getCirtificate)
})