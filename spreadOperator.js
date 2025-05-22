//spread operators 
// spread operator is used in array and object to perfom work such as copying , mergin or expanding  
let nums = [1, 2, 3, 4];
let nums1 = [5, 6, 7];
let newNums = [...nums, ...nums1];

let copyNums = [...nums];
console.log(newNums); //output: [1,2,3,4,5,6,7]
console.log(copyNums);//out[1,2,3,4]


// spread operator in objects
let personObj = {
    name: "pratik",
    age: 20
};

let detailObj = {
    gender: "male",
    occupation: "software trainnie"
};

let copyObj = { ...personObj };
console.log(copyObj);

let mergedObj = { ...personObj, ...detailObj };
console.log(mergedObj);