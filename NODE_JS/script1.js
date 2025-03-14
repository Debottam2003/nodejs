const { response } = require("express");

let a = 12;

module.exports = a;

console.log(1);

// const promise = new Promise((resolve, reject) => {
//     // Perform asynchronous operation
//     let success = true;
//     if (success) {
//         resolve("Operation successful!");
//     } else {
//         reject("Operation failed!");
//     }
// });

function responseFetch() {
        return new Promise((resolve, reject) => {
            // Perform asynchronous operation
            let success = true;
            if (success) {
                resolve("Operation is successful!");
            } else {
                reject("Operation failed!");
            }
        });
    }

// custom Fetch function
responseFetch()
    .then((response) => {
        console.log(response);
        return "this is the next response";
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });

console.log(2);