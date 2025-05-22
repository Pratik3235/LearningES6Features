// async await is used for asynchronous operations it will not move to next line until the promise is resolved
//it is introduces in ES6 and it is a better option for resolving an promise then using .then .catch
async function fetchData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let result =await res.json();
    result.map((el) => console.log(el.title));
}
fetchData();