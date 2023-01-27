"use strict";
class Cricketer {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is Playing`);
    }
}
//As we can see we can use class as data type in ts this will make sure that only with that specific class object will be valid to the array .otherwise it will show Error
const Tamim = new Cricketer("Tamim", 40, "Bangladesh");
const Musfiq = new Cricketer("Musfiq", 38, "Bangladesh");
const crickters = [];
crickters.push(Tamim);
crickters.push(Musfiq);
//As we see the class properties which is declared as private will not be accessible outside of the class. And readOnly can be read but could't modify it. By default properties of the class is declared as public.
// Tamim.age = "Iqbal"
// Tamim.country = "england"
// console.log(Tamim.age)
console.log(Tamim.country);
