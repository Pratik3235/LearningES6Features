function greetings(name = "guest") {
    console.log(`hello ${name}`);
}
greetings();//hello undefined
greetings("shyam");// hello shyam

// default paramters is also introduced in es6 features
//if we do not pass an value to a function call statement at that time 
//it will give output as hello guest because as we have written a default value as guest
//if we provide an value then default value will be overwritten and output will be hello yourname