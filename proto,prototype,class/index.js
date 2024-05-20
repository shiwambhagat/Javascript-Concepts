//__Proto__
var obj={
    fName:"John",
}
var obj2={
    lName:"Smith",
};
obj2.__proto__=obj;
console.log(obj2.fName)
console.log(obj2);//reference of obj is also contained in it(prototype)
console.log(obj2.fName);
var ob={
    fName:"Cutey",
};
ob2=Object.create(obj)
console.log(ob2)
console.log(ob2.fName)

//__Proto__
function Person(name,age){
let person=Object.create(objj)
person.name=name;
person.age=age;
return person
}
var objj={
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

let user=Person("John",8)

console.log(user)

//Prototype
function Person(name,age){
    let person=Object.create(Person.prototype)
    person.name=name;
    person.age=age;
    return person
    }
    Person.prototype.greet=function(){
            console.log(`Hello ${this.name}`)
        }
    
    
    let user1=Person("Shailly",19)
    user1.greet()
    console.log(user1)
    
    //Using new keyword
    function Person3(name,age){
        this.name=name;
        this.age=age;
    }
    Person3.prototype.greet=function(){
        console.log(`Hello ${this.name}`)
    }
    let user2=new Person3("Janvi",16)
    user2.greet()
    console.log(user2)

    //Class
    class Person4{
        constructor(name,age){
            this.name=name;
            this.age=age;
        }
        greet(){
            console.log(`Hello ${this.name}`)
        }
    }
    let user4=new Person4("Shalu",34)
    user4.greet();
    console.log(user4)

    //ClassExample
    class Hello{
        constructor(name){
            this.name=name;
        }
        sayHi(){
            console.log("hello "+this.name)//method creation
        }
    }
    let obb=new Hello("Shalini")
    obb.sayHi()
    let obb1=new Hello("Shakshi")
    obb1.sayHi()

    console.log(typeof Hello)  
    console.log(Hello.prototype.sayHi)