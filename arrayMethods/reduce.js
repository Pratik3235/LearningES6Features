// reduce is higher order function which accepts a callback and in callback we must pass 4 arguments first accumulator second element and third one is index and forth is array itself
// it will internally return an output so we do not requird to use any outer memory
// it will reduce an array as according to the operation performed

let array = [11, 25, 30, 256, 36];

let out = array.reduce((acc, el) => (acc + el), 0);

console.log(out); //output: 358