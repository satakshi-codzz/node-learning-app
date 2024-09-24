// Asynchronous Programming  Language 
//Best Example of async 

// console.log("This is a first paragraph");
// setTimeout(()=>{
//     console.log("This is a second paragarph");
// }, 2000)
// console.log("This is a third paragraph");

// the output of the above example is first and third paragraph shows first and then the middle paragraph shows after 2 sec. This is a async coding where the code is running independently without waiting for each other


// Disadvantages of async language 
// In this the output is 10 beacuse console.log(a + b) thsi comand is executed already and this can be solved and to get the actual result we use promises and async await 

// let a = 10;
// let b = 0;
// setTimeout(() => {
//     b = 30;
// });

// console.log(a + b);

// Promises 

let a = 10;
let b = 0;

const waitingResult = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2000);
});

waitingResult.then((data) => {
    console.log(a + data);
});