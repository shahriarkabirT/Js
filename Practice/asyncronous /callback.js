let payment = true;
let mark = 80;

let payment2 = true;
let mark2 = 90;

function enroll (person,callback){
    console.log(`Course enrolment for ${person}...`);

    setTimeout(function(){
    if(payment){
        console.log(`Course enrolment is done for ${person}.`);
    callback(person);
    }
    else{
        console.log(`Course enrolment is failed for ${person}!!`);
    }
    },2000)
}


function processing(person,callback){
    console.log(`Course is processing for ${person}....`);
    setTimeout(function(){
    if(mark>=80){
        callback();
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
        callback();
    }
    else{
        console.log("You are an idiot");
    }
    },2000)
}

function getCirtificate(name){
    setTimeout(function(){
        console.log( name + " has passed");
    },0)
}
enroll("Shahriar" ,function(person){
    processing(person,function(){
        getCirtificate(person);
    })
});
enroll("Humaira" ,function(person){
    processing(person,function(){
        getCirtificate(person);
    })
});