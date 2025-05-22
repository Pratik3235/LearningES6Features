// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value.

let array = [1, 2, 30, 40, 39, 22];

let out = array.every((el) => (el <= 60));

console.log(out);// output:true everry element in array is less than or equal to 60