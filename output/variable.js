"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let greetings = "hello Abir";
console.log(greetings);
greetings.toUpperCase();
//number
let userId = 334455.3;
console.log(userId);
//boolean
let isLoggedIn = false;
console.log(isLoggedIn);
//string
let b;
//this process of declaring data type is call explicit data declaring
//array
let a = [];
b = "Abir";
a.push("Abir", 4 /*false*/); // AS in here boolean is not defined in declare its showing error.
//object
let c;
c = {
    name: "abir",
    id: 34,
    isPerson: true,
};
// we can add an array in object data type as in js array is also a type of object.
c = [1, 2, 3];
// Any type
// It allow us to use any data type as we liked
let d = [];
d.push("bangladesh");
d.push(false);
d.push(15);
//Function Type
const myFunc = () => {
    console.log("Hello");
};
myFunc();
