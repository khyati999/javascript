let marks=[97,99,67,88];
console.log(marks);
console.log(marks.length);
console.log(typeof(marks));
// We can say array as key:value pair but instead of key we use index
// Array : mutable

//Looping over array
for(let el of marks){
    console.log(el);
}

marks.push(77)  //add to end
console.log(marks);
marks.pop()
console.log(marks); //deletes from end
console.log(marks.toString());

//unshift(): add to start
marks.unshift(66)
console.log(marks);
marks.shift();
console.log(marks);

//splice()changes original array(add, remove, replace)
//splice(startIndx,delCount,newEle..)
marks.splice(2,2,101,102);
console.log(marks);