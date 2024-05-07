class Student{

  
  // constructor(name,phone,address){
  //   this.name = name ;
  //   this.phone = phone ;
  //   this.address = address;
  // }
  setMethod(name,phone ,address){
    this.name = name ;
    this.phone = phone ;
    this.address = address;
  }
  getMethod(){
    return this.name + " "+ this.phone +" "+ this.address 
  }
}

let student = new Student;
student.setMethod("humaira",39,"gazipur");
console.log(student.getMethod());

