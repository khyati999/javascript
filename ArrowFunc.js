//Compact way of writing func
const sum=(a,b)=>{
    return a+b;
}
let ans=sum(90,87);
console.log(ans);

//forEach()
let ar=[1,2,3,4,5];
ar.forEach(function printVal(val,idx,ar){
    console.log(val,idx,ar);
})
//Map: it is very similar to forEach but difference is it returns new arr
ar.map((val)=>{
    console.log(val);
})

//filter: Callback func will fileter out the value and given in new arr
let num=ar.filter((val)=>{
    return val%2===0;
})
console.log(num);

//Reduce Method: performs some operations and reduces the arr to a single value. It returns that single val
//accumulator:res, currentValue: val
const output=ar.reduce((res,cur)=>{
    return res+cur;
})
console.log(output);