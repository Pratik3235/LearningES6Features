//this is an simple arrow function which provides a sum of two veriables
const add = (a, b) => {
    return a + b;
}

console.log(add(5, 6));

// this inside an arow function
//Arrow functions do not have their own this like regular functions. Instead, they lexically inherit this from the scope where they are defined

const person = {
    name: "Pratik",
    greet:()=> {
        console.log(`Hello ${this.name}`);
    }
}
person.greet();

// The output is "Hello undefined" because arrow functions do not have their own this.
//  Instead, they inherit this from the scope in which they are defined.
//  In this case, greet is defined in the global scope (not inside a function or class),
//  so this refers to the global object — which doesn’t have a name property called "Pratik", so this.name is undefined.

//how to correct this

const person1 = {
    name: "Pratik",
    greet(){
        console.log(`Hello ${this.name}`);
    }
}
person1.greet();