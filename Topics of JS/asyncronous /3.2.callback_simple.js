const task1 = (callback) =>{
    console.log("task 1 is done");
    callback();
}
const task2 = (callback) =>{
    setTimeout(() => {
        console.log("task 2 is done");
       callback();  
    }, 2000);
   
    
    
}
const task3 = () =>{
    console.log("Task 3 is done");
}


task1(function f2(){
    task2(function(){
        task3();
    });
});

