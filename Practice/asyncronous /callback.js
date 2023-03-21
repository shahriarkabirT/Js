let payment = true;
let mark = 80;

let payment2 = true;
let mark2 = 90;

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
function getCirtificate(name){
    setTimeout(function(){
        console.log( name + " has passed");
    },0)
}

function processing(callback){
    console.log("Course is processing....");
    setTimeout(function(){
    if(mark>=80){
        callback("Shahriar");
    }
    else{
        console.log("You are an idiot");
    }
    },2000)
}

function processing2(callback){
    console.log("Course is processing....");
    setTimeout(function(){
    if(mark>=80){
        callback("Humaira");
    }
    else{
        console.log("You are an idiot");
    }
    },2000)
}


enroll(function(){
    processing(getCirtificate)
});
enroll(function(){
    processing2(getCirtificate)
});