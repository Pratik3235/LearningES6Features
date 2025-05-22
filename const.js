//let and const are the two types of veriable type added in es6 feature


//seprate decleration and initialization is not allowed with const veriables they must be declared and initialize with a value
// const age;
// age = 20;

// we should declare a veriable of const in a such manner which is shown below
const age = 20;
// veriables declered by const are not allowed to redeclare or reinitialization

// /const age=30 // not allowed

//Scoping
function greeting()
{
    const name = "Pratik";
    console.log(`Hello ${name}`);
}
//in javascript veiables declared by consr are of block as well as functional scoped; they can be only used in same block we cannot able to acces them outside
//console.log(name);

// in line no 29 we will get an error saying drink is not declared because veriables of const are of functional and block scope
// let val = true

// if(val){
//     const drink = "Tea";
// }
// console.log(drink);


greeting();//output: Hello Pratik


//Hoisting
//veriables declered by let and const are hoisted and they will present in the temporal dead zone untill they have initialize or provided values;

//hoisted and present in TDZ
// console.log(gender);
const gender = "female";
 // we will get an error saying that  Cannot access 'gender' before initialization but iw will not be the case with var it will provide a value of undefined
//value assigned now we can use them

console.log(gender);//female


