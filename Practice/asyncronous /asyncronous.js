const print= ()=>{

    console.log(1);

    console.log(2);

 setTimeout(() => {
    console.log("this will work as asyncrinous");
}, 3000);


    console.log(3);

    console.log(4);

    console.log(5);
}

print();