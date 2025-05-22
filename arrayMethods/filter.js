
// filter is higher order function which accepts a callback and in callback we must pass 3 arguments first element second index and third one is array itself
// it will internally return an array as an output so we do not requird to use any outer memory
// it will filter an array as according to the condition


let array = [11, 25, 30, 256, 36];

let out = array.filter((el) => (el % 2 == 0));

console.log(out);