age = 24;
price=99.99;
x=null; //absent (no value)
y=undefined; //dont know what value it has
fullName="Tony Stark";
 //Boolean Values
isFollow = false;
//JS is a dynamically typed lang. because we don't need to specify data type

//let: can be re-declared but can't be updated. It is a block scope variable

let fullname="Khyati";
let totalPrice =1000;

// var: can be re-deaclered and updated. it follows global scope

var age=43;
var age=88;
var age=99;

//const: con't be re-declared or updated. A block scope variavle
const ageGrp=24;
// ageGrp = 86;
// const must be declared with some value let can work without giving value but taked defaul value undefine

//Object has key:value pairs  
const student={
    fullName:"Rahul Kumar",
    age: 20,
    cgpa: 8.3,
    isPass: true,
};
console.log(student["age"])
console.log(student.cgpa)
student["fullName"]="Rahul Sharma";
console.log(student.fullName)