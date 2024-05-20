let a=5;
let b="this is js practice";
console.log(a);
console.log(b);
var c="this is javascript";
var c="this is changing of values using var";//var changes the declared values when the variable is used later
console.log(c);
const d="Hello World";
console.log(d);
const e=true;
console.log(typeof e);
const f=10+20;
console.log(f);
let age=18;
if(age>=18){
    console.log("you are eligible");

}
else{
    console.log("ypu are not eligible")
}
let ch=2;
switch(ch){
    case 1:
        console.log("I am one");
        break;
    case 2:
        console.log("I am 2nd");
        break;
    case 3:
        console.log("I am third");
        break;
    default:
        console.log("I am default value");
            break;
}

for(let i=0;i<10;i++){
    console.log(i);
}


function name(){           //creating a function
    console.log("I am Shiwam")
}
name();//function calling


function name2(a,b){
    console.log(a+ " "+b+" "+"I am Shiwam")
}
name2("Hello","!");//passing argument

//function to arrow function
let sum=function(a,b){
    return a+b;
}
console.log(sum(2,3))
//arrow function
let sum1=(a,b) => a+b;
console.log(sum(2,5))

//Arrays
let num=[1,23,44,55,667];
console.log(num);
console.log(num[2])
console.log(num.length)

//Asynchronous Javascript usage
console.log("I");
setTimeout(()=>{
    console.log("Async. JS");

},5000);

console.log("am")

//Asynchronous Javascript mor examples
function loadingData(){
    setTimeout(()=>{
        console.log("1")
    },5000)
}
function collectingData(){
    setTimeout(()=>{
        console.log("2")
    },3000)
}
function approvingData(){
    console.log("3")
}
function approved(){
    console.log("4")
}
loadingData();
collectingData()
approvingData()
approved()

//Creating Object
let obj={
    name:"Bravo",
    age:20,
    fun:function(){
        console.log("I am a function")
    }
}
console.log(obj.age);
console.log(obj.fun())

//array of objects

let arr=[{
    user:1,
    name:"Ayush"
},
{
    user:2,
    name:"Manish"
},
{
    user:3,
    name:"Rajiv"
}]
console.log(arr[2].user)