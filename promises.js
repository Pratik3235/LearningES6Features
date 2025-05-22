let newPromice = new Promise((res, rej) => {
    let check = true;
    if (check)
    {
        res("Success");
    }
    else {
        rej("Failed to resolve");
    }
})

newPromice.then((msg) => {
    console.log(`Resolved: ${msg}`);
}).catch((err) => {
    console.log(`Failed: ${err}`);
})