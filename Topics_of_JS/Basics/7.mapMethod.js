// map =>  accepts a callback and applies that function
//         to each element of an array,then return to a new array


let arr = [1,3,6];
const cubes = arr.map(cube);

cubes.forEach(display);

function cube(element){
    return Math.pow(element, 3);
}

function display(element){
    console.log(element);
}
