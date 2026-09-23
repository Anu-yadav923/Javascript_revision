function greet(name){
    console.log(`hello ${name}`);
}

greet("Anu");

//  characteristics of function
// 1 . Hoisting : Before executing the function, the function declaration is known.

// flower("lily");

// function flower(flower_name){
//     console.log(`flower name is : ${flower_name}`);
// }

console.log(flower("lily"));

function flower(flower_name){
    return `flower name is ${ flower_name}`;
}
//this

const user = {
    name : "Anu",
    greet : function (){
        console.log(this.name);
    }
};

user.greet();

// arguments: is an object which contaims values pass during function execution
//so if we dont pass parameter during function declaration, the function still recieves the values passed through arguments.
// arguments: 
//         0 => 10
//         1 => 20

function add(){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments.length);
}
add(10,20);

function person(name){
    this.name = name;
   
}
const person1 = new person("john")
 console.log(person1.name);

 // ARROW FUNCTION

 const greet3 = (name) => {
    console.log(`hello ${name}`);
 }
 greet3("Anu");

 const greet4 = name => console.log(`hello ${name}`);
 greet4("Anu");

 const sum = (a,b) => console.log(a+b);
 sum(2,3);

 const createUser = (name, age) => ({name:name, age:age});
 console.log(createUser("Anu", 22));

 //object distructuring..
 const createUser2 = (name, age) => ({name, age});
 console.log(createUser2("Anu", 22));

//  const user1 = {
//     name: "John",
//     age: 25
// };

// const { name: name} = user1;

// console.log(name);
// console.log(x);

const user1 = {
    name: "John"
};

const { age } = user1;

console.log(age);

const user2 = {
    name: "John",
    age: 25
};

const { name: userName, age: userAge } = user2;

console.log(userName);
console.log(userAge);

//
const user3 = {
    name: "John",
    age: undefined
};

const { age1 = 18 } = user;

console.log(age1);

const user5 = {
    name: "John",
    address: {
        city: "Patna",
        pincode: 800001
    }
};

const {
    name,
    address: { city }
} = user5;

console.log(name);
console.log(city);

const user6 = {
    name: "John",
    address: {
        city: "Patna",
        pincode:123
    }
};

const {
    address: { pincode = 123456 } 
} = user6;

console.log(pincode);

function greet({ name, age }) {
    console.log(`Hello ${name}, you are ${age}`);
}

const user7 = {
    name: "John",
    age: 25
};

greet(user7);

const user8 = {
    name: "John",
    age: 25
};

const { name: firstName = "Unknown", cityy = "Delhi" } = user7;

console.log(firstName);
console.log(cityy);

// IIFE : Immediately Invoked Function Expression 

(function () {
    console.log("IIFE function");
}) ();

(function(name) {
    console.log(`hello ${name}`);
}) ("Anu");

(() => console.log("Hello Anu!") )();

const counter = (function() {
    let count = 0;
    return {
        increment : () => ++count,
        decrement : () => --count,
        getCount :  count

    }
}) ();
console.log(counter.increment);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.getCount);

// CONSTRUCTOR FUNCTION

function Personn(name, age){
    this.name = name,
    this.age = age
    this.greet = () => console.log(`Hello, I am ${this.name}` )
};

const personn1 = new Personn("Anu", 22);
console.log(personn1);
personn1.greet();

const bar = function() {
    return -1;
};

console.log(bar());
console.log(bar);

const baz = () => 1;       // it returns even without a return keyword
console.log(baz());

const personn2 = {
    name : "Anu",

    regular : function() {
        console.log(this.name);

        this.arrow = () => {
        console.log(this.name);
    }

     return this;
    } 

}
personn2.regular();
personn2.arrow();
personn2.regular().arrow()

// REST AND SPREAD

function sum1(...numbers){
    return numbers.reduce((total, nums) => total + nums, 0);
}

console.log(sum1(1,2,3,4,5));

function oldSum(){
    let sum = 0;

    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(oldSum(1,2,3,4,5));

const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log([...arr1, ...arr2]);

const arr3 = [5,6,7,8];
console.log(...arr3);    // spread  (array to indivisual) --unpacked

function rest(...args){    // rest   (indivisual to array) --packed
    console.log(args);
}
rest(1,2,3);

// VAR as HOISTED/ scope chain

var x = 10;
function outer() {
    console.log(x);
    var x = 20;
    console.log(x);

    function inner(){
        console.log(x);
        var x = 30;
        console.log(x);
    }
    inner();

}
outer();

console.log (b);
var b = 10;

// HOISTING
console.log(namee);
var namee = "Anu";


// console.log(sayhii);
// const sayhii = () => console.log("hiiii");

// console.log(typeof flowerr);
// console.log( flowerr);
// var flowerr;

function counterr() {
    let count = 0;

    return function() {
        count++;
        return count;
    }
    
}

const counter1 = counterr();
const counter2 = counterr();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());

function showargs(){
    console.log(Array. from(arguments));
}

showargs([3], [4,5,6]);
showargs("a,b,c")

function showthis(age, name){
    this.age = age;
    this.name = name;
    console.log(this);
}
const a = new showthis(22, "Anu");
const bb = new showthis(20, "alice");

const objj = {
    name : "Anu",
    greet : () => console.log(this.name),
    greet1 : function () {
        console.log(this.name);
        this.innergreet =  () => console.log(this.name);
    }

}
objj.greet();
objj.greet1();
objj.innergreet();
console.log(objj);