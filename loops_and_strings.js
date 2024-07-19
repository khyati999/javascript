//for loop
for(let cnt=1;cnt<=7;cnt++)
{
    console.log("Spanidea!");
}

for(let i=1;i<=5;i++)
{
    console.log("i=",i);
}
//let i; // So we require to redefine i here var is global
// console.log(i); // this won't work as i is declared in block scope 


//While loop
let j=1;
while(j<=3){
    console.log(j);
    j++;
}

//do-while
let i=20;
do{
    console.log("Hello!");
    i++;
}while(i<=10);

//for-of loop: iterate on some special date type
//It helps to loop over strings and arrays

let str="Hello";
for(let k of str){
    console.log(k);
}

//for-in: used to iterate over objects
let student={
    fullName:"Rahul Kumar",
    age: 20,
    cgpa: 8.3,
    isPass: true,
};
for(let keys in student){
    console.log("key=",keys,"value=",student[keys]);     
}

//Strings
let s  = "Khyati";
console.log(s[1]);

//template literals(string): with string we can write variables also. It is a way to embedded expressions in strings
let obj={
    item:"pen",
    price: 10,
};
let out=`The cost of ${obj.item} is ${obj.price} rupees`
//console.log("the cost of",obj.item,"is",obj.price);
let sentence = `This is a template literal ${1+2+3}`;
console.log(sentence);
console.log(out);

//String interpolation: To create strings by doing substitution of placeholders

// String Methods: Strings in JS are immutable

console.log(s.toUpperCase()); //doesn't change original string

console.log(s.toLowerCase());
console.log(s.slice(1,4));
s1="Mishra"
console.log(s.concat(s1));
console.log(s.replace("a","i"));