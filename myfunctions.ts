function addTwo(num: number) {
  return num + 2;
}

let result: number = addTwo(5);
console.log(result);

const sum = (num1: number, num2: number) => {
  return num1 + num2;
};
console.log(sum(10, 15));
//we can also specify default variable return value in parameter such as  boolean
let signUPUser = (name: string, isTest: boolean = false) => {
  return `My name is :${name} and I am a ${isTest} `;
};
console.log(signUPUser("Abir"));
//we can specify which type of variable will function return

const two = (num: number): number => {
  return num + 3;
};
console.log(two(20));

const logmsg = (message: any): void => {
  console.log(message);
};
//optional parameter
const addAll = (a: number, b: number, c?: number): number => {
  //typeGard
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
console.log(addAll(10, 32));
//rest parameter
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
logmsg(total(1, 3, 4));

export {};
