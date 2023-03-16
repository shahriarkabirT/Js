let student = [
    {
        name: 'Shahriar',
        id : 25,
        cg: 3.6
    },
    {
        name: 'Humaira',
        id : 26,
        cg : 4.5
    },
    {
        name: 'halum',
        id : 25 ,
        cg: 2.6,
    }
]

/*
function name (){
for(var i = 0 ; i < student.length ; i++){                  //typical way
    if(student[i].cg > 3){
        console.log(student[i].name);
    }
}}
name();

*/

/*
const name = () =>{
   return student.filter(function(x){
        return x.cg>3;
    }).map(function(y){                             //arroy funtion but lengthy 
       return y.name;
    })
}

console.log(name());

*/

const name = () => student.filter((x)=> x.cg>3).map((y)=> y.name);          //precise way

console.log(name());

