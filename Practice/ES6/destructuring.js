/*

let array = [4,5,3,4];
let s = [3,4];
let [a,b] = s;
[a,b]=[b,a];
console.log(a , b);                                         //basic array destructuring

let [num1,num2,num3,num4] = array;

//let[n1, ...n] = array;

//console.log(...n + " h");
*/
/*
const students = {
    dept : "CSE",
    name: {
       name1 : "Shahriar",
       name2 : "Humaira",
    } ,
    id : {
        id1 : "21103060",
        id2 : "21103060",
    }
}                                                               //basic object destructuring 


let {dept,name,id} = students;


console.log(dept,name.name1,id.id1);

*/


const students = {
    dept : "CSE",
    name: {
       name1 : "Shahriar",
       name2 : "Humaira",
    } ,
    id : {
        id1 : "21103060",                                                  // destrusturing a funtion's parameter
        id2 : "21103060",
    }
}         

const printValue = ({dept,name,id}) => {
    console.log(`${dept} , ${name.name1} , ${id.id1}`);
} 


printValue(students);