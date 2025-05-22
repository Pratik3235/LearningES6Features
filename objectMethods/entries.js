let obj = {
    firstName: "Pratik",
    middleName: "Vinayak",
    lastName: "Patil"
};

let person = Object.entries(obj).map((el)=>el[1]).join(" ");
console.log(person);//Pratik Vinayak Patil