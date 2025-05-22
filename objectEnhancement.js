let name = "Pratik";
let age = 24;
//Computed Property Names
let key = "gender";
// object shorthand property
let obj = {
    name,
    age,
    //use of computed properties
    [key]: "male",

    //Method Definitions shorthand
    greet() {
        console.log(`Hello ${this.name}`);
    }
};
console.log(obj);

