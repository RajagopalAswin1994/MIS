// client side scripting language
// exists on its own
// executed by the inbuilt compiler of the browser
alert("Hai, Welcome to Javascript Programming");
var vlue;


//  Date datatype

var today = new Date();
var d1 = new Date(1000); 
var d2 = new Date("03/04/2020");
var d3 = new Date(1994,10,15);
var d4 = new Date(1994,10);
var d5 = new Date(1994,10,15,16);
var d6 = new Date(1994,10,15,16,15);
var d7 = new Date(1994,10,15,16,15,32);
var d8 = new Date(1994,10,15,16,15,32,58);
var d9 = new Date(1994,10,15,16,15,32,26,34);
var d9 = new Date(1994,10,15,16,15,32,26,34);
var d10 = new Date(2000,1,45);
console.log(d10);


// Array

var arr1 = [10,20,30,40,50];
console.log("length of array"+ arr1.length) // check the length of array
console.log("First element"+arr1[0]);// to shows the particular element

arr1[3]=1000;
console.log("First element"+arr1);// to shows the particular element

arr1=[10,"Raj",12000];


//  Push & pop --its works at the last element
arr1.push("hell");//10,"Raj",12000,"Hello"

var newLength = arr1.push("hello")



console.log(arr1);

arr1.pop();// "hello is pop out"
console.log(arr1);

// shift and unshift -- it work with first elemt


arr1.unshift("Good Morning"); // it insert at the first element

console.log(arr1);

arr1.shift(); // it insert at the first element

console.log(arr1);


// Splice method
arr1 = [10,20,30,40,50,60,70,80,90,100]
console.log(arr1);
arr1.splice(2,3);// arr.splice(pos,deletecount)
console.log(arr1);

arr1.splice(2,1,45,56,28);
console.log(arr1);



// objects

// data about particular entity anlong with some finctions

// var emp1 = {
//     key:value
// }

var emp1 = {
        "empid":101,
        "empname": "Rajagopal",
        "salary":140000
    }

console.log("Employee Details"+ emp1);
console.log("Employee Details", emp1);
console.log("Employee Details"+ emp1.empid);
emp1.empname="Aswin";
emp1["salary"] = 250000;
emp1.deptid = 'DEV105';// It will add a entitiy in object
console.log("Employee Details", emp1);

var s1 = 10+10;

console.log(s1);

s1 = "10"+10;
console.log(s1);

s1 = 10+"10";
console.log(s1);

s1 = "10"+10 + "10";
console.log(s1);

s1 = 10+ 10+"10";
console.log(s1);
s1 = 10+ 10+"10"+10+10;
console.log(s1);

s1 = "hello"+ true;
console.log(s1);


s1 = true + true;
console.log(s1);