
var a = 1;
let b = 2;
const c = 3;

if(true){
    var a = 10;
    let b = 20;    // A variable declared in an inner block can have the same name as one in the outer scope, and are treated differently.
    const c = 30;

    console.log(a,b,c);
}

//console.log(magic);
//var magic = "I am hoisted";

/*const person = {
    name:"jane"
}
const person = {
    name:"rose"
}
console.log(person.name); */