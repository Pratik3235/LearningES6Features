// async await is used for asynchronous operations it will not move to next line until the promise is resolved

async function fetchData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let result =await res.json();
    result.map((el) => console.log(el.title));
}
fetchData();