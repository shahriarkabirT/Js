const names = ["tasin","Rahim", "Karim", "Rabbi"];

for(var i of names){
console.log(i);
}


const pesVersion = {
    name : "Pes Mobile",
    Version : 2
}

for(var i in pesVersion){
    console.log(`${i} : ${pesVersion[i]}`);
}