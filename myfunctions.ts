function addTwo(num:number) {
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





















export {};
