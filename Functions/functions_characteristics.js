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