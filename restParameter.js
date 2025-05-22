//rest parameters helps us to
// if we pass multiple number of arguments with the same data type at that time rest parameter will convert those argument in an array
// then we can perform array method opertions and make it work as we like


function sum(...nums)
{
    return nums.reduce((acc, el) => acc + el, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); //Output:45