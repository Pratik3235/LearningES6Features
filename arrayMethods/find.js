//The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function.
//  If no values satisfy the testing function, undefined is returned.

let array = [11, 25, 30, 256, 36];

let out = array.find((el) => (el % 2 == 0));

console.log(out);