let obj = {
    firstName: "Pratik",
    middleName: "Vinayak",
    lastName: "Patil"
};

let out = Object.keys(obj);

let res = out.map((el) => (obj[el])).join(" ");

console.log(res); //Pratik Vinayak Patil