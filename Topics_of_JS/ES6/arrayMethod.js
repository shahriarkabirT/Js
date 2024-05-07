myArray = [2,5,1,4,5];

// const searchfive = myArray.find((value,index,arr)=> {
//     if(value==5){return value}
// })


const searchfive = myArray.findIndex((x)=> x>4 );

console.log(searchfive);


const students = [
   {
     name : "Humaira",
        id : "21103053", 
      
    } ,
    {
        name : "Shahriar",
                                                       
        id : "21103060",
    }
]  

const findHumaira = students.find(x => x.name =="Humaira");
console.log(findHumaira);
