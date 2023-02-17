let greetings: string = "hello Abir";
console.log(greetings);
greetings.toUpperCase();
//number
let userId: number = 334455.3;
console.log(userId);
//boolean
let isLoggedIn: boolean = false;
console.log(isLoggedIn)
//string
let b: string | number;
//this process of declaring data type is call explicit data declaring
//array
let a: (string | number)[] = [];
b = "Abir";
a.push("Abir", 4 /*false*/); // AS in here boolean is not defined in declare its showing error.

//object
let c: object;
c = {
  name: "abir",
  id: 34,
  isPerson: true,
};
// we can add an array in object data type as in js array is also a type of object.
c = [1, 2, 3];
// Any type
// It allow us to use any data type as we liked
let d: any[] = [];
d.push("bangladesh");
d.push(false);
d.push(15);

//Function Type
const myFunc = () => {
  console.log("Hello");
};
myFunc();
export {};