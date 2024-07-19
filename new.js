let obj={
    a:1,
    b:2,
    c:3,
}
console.log(Object.values(obj));
const obj1=obj;

obj["d"]=4;

console.log(obj1);
var a='5';
var b=a;
a='6';
console.log(b);


