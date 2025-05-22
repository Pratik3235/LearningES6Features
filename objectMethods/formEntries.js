let arr = [
    ["name", "Pratik"],
    ["marks", 90]
];

let out = Object.fromEntries(arr);
console.log(out); //{ name: 'Pratik', marks: 90 }