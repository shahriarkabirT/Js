const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("task 1 is completed");
  });
};
const taskTwo = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("task 2 is completed");
      }, 2000);
    });
  };
const taskThree = () =>{

        return new Promise((resolve,reject) => {
            reject("task3");
        });
    };
    taskOne()
    .then((res) => console.log(res))
    .then(taskTwo)
    .then((res) => console.log(res))
    .then(taskThree)
    .then((res) => console.log(res))
.catch((res)=>console.log(res))

console.log("hello");