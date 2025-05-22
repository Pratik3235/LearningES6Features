let obj = {
    firstName: "Pratik",
    middleName: "Vinayak",
    lastName: "Patil"
};

let out = Object.values(obj).map((el) => (el)).join(" ");

console.log(out);