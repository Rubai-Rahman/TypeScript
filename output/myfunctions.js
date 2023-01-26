"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
let result = addTwo(5);
console.log(result);
const sum = (num1, num2) => {
    return num1 + num2;
};
console.log(sum(10, 15));
//we can also specify default variable return value in parameter such as  boolean
let signUPUser = (name, isTest = false) => {
    return `My name is :${name} and I am a ${isTest} `;
};
console.log(signUPUser("Abir"));
//we can specify which type of variable will function return
const two = (num) => {
    return num + 3;
};
console.log(two(20));
