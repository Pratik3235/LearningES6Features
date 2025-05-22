//let and const are the two types of veriable type added in es6 feature

//declaration and reinitialization is allowed in let 

let age = 26;
age = 30;

// redecleation with same veriable name is not allwed with veriables of let
// let name = "pratik";
// let name = "shyam";


//Scoping
function greeting()
{
    let name = "Pratik";
    console.log(`Hello ${name}`);
}
//in javascript veiables declared by let are of block as well as functional scoped; they can be only used in same block we cannot able to acces them outside
//console.log(name);

greeting();//output: Hello Pratik


//Hoisting
//veriables declered by let and const are hoisted and they will present in the temporal dead zone untill they have initialize or provided values;

//hoisted and present in TDZ
// console.log(gender);
let gender;
 // we will get an error saying that  Cannot access 'gender' before initialization but iw will not be the case with var it will provide a value of undefined
//value assigned now we can use them
gender = "male";

console.log(gender);//male


