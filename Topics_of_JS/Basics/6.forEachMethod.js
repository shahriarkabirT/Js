let numbers = [1,3,4];

numbers.forEach(add);
numbers.forEach(display);
function add(element,index,array){
    array[index] = element + 3;
}
function display(...element){
    console.log(...element);
}
