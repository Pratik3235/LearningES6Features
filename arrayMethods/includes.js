// The includes() method of Array instances determines whether an array includes a certain value among its entries,
//  returning true or false as appropriate.

let array = [1, 2, 3];

let out = array.includes(2);

console.log(out);// true

let result = array.includes(2, 2);

console.log(result);// false