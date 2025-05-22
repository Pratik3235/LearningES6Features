let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map is higher order function which accepts a callback and in callback we must pass 3 arguments first element second index and third one is array itself 
// it will internally return an array as an output so we do not requird to use any outer memory 

let out = arr.map((el, i, arr) => (el + 2));

console.log(out);//out[3,4,5,6,7,8,9,10,11,12,13];