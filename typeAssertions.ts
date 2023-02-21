type One = string;
type Two = string | number;
type Three = "Not Hello";

//convert to more or less specific
let a: One = "hello";
let b = a as Two; //less specific
let c = a as Three; //more specific
console.log(a, b, c);
