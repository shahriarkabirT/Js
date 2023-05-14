const person = '{"name" : "Shahriar", "age" : 38 }';
const person2=  {
    name : "Humaira",
    age : 22,
}
console.log(JSON.parse(person).name);
JSON.stringify(person2);
console.log(person2);
 

//revive function 

const information = '{"name" : "shipon", "age" : "20", "birth":"22-09-2000"}';

const info = JSON.parse(information,function(key , value) {
        return value;
})

console.log(info);


//array

const arr = '["Tasin","Shahriar","ATM","Hasan"]';
console.log(JSON.parse(arr));
console.log(JSON.parse(arr)[0]);


//converting string data into date object 

const birthinfo = '{"birth": "2000-09-22"}';

const obj = JSON.parse(birthinfo, function (key, value) {
    if (key == "birth") {
      return new Date(value);
    } else {
      return value;
    }
  });

  console.log(obj);


  //function

const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj2 = JSON.parse(text);
obj2.age = eval("(" + obj2.age + ")");
console.log(obj2.name + " , " + obj2.age());

//stringify

const array = ["John", "Peter", "Sally", "Jane"];
const myJSON = JSON.stringify(array);
console.log(myJSON);

//localstorage 

const locData = ["username","password"];
const data = JSON.stringify(locData);
localStorage.setItem("testJSON", data);

const retrivalData = localStorage.getItem("testJSON");

const myData = JSON.parse(retrivalData);

console.log(myData);
