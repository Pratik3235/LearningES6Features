// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function.
//  If no elements satisfy the testing function, -1 is returned.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let out = array.findIndex((el) => (el >= 10));

console.log(out);//9