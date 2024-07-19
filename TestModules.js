//Q1.
let nums = [9,6,4,2,3,5,7,0,1]
nums.sort();
let n=nums.length;
if(nums[0]!=0){
    console.log(0);
}
if(nums[n-1]!=n){
    console.log(n);
}
for(var i=1;i<n;i++){
    if(nums[i]!=i){
        console.log(i);
    }
}

//Q2.
var dob = '20030104';
var year = Number(dob.substr(0, 4));
var month = Number(dob.substr(4, 2)) - 1;
var day = Number(dob.substr(6, 2));
var today = new Date();
var age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
console.log(age);

//Q3
function fact(n){
    if(n===0){
        return 1;
    }
    return fact(n-1)*n;
}
let res=fact(5);
console.log(res);

//Q4
function sumAll(nums) {
    let start = Math.min(...nums);
    let end = Math.max(...nums);
    let sum = 0;

    for (let num = start; num <= end; num++) {
        sum += (num*num);
    }
    return sum;
}

let ans = sumAll([4, 1]);
console.log(ans);

//Q5
function RandomItem(arr) {

   
    const randomInd = Math.floor(Math.random() * arr.length);
    const item = arr[randomInd];
    return item;
}

const my_list = [1, 'a', 32, 'c', 'd', 31];

const result = RandomItem(my_list);
console.log(result);

//Q6

function sortObj(people,key){
    return people.slice().sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
}

people=[
    { name: 'John', age: 25 },
    { name: 'Jane', age: 22 },
    { name: 'Mark', age: 30 },
    { name: 'Mary', age: 28},
]
let sorted=sortObj(people,'name');
console.log(sorted);

function ReverseString(str){
    const revstr=str.split('').reverse().join('');
    console.log(revstr);
}

ReverseString("Welcome to this Javascript Guide!");

