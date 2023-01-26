class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }
  play() {
    console.log(`${this.name} from ${this.country} is Playing`);
  }
}

//As we can see we can use class as data type in ts this will make sure that only with that specific class object will be valid to the array .otherwise it will show Error

const mashrafi = new Player("Masrafi", 40, "Bangladesh");
const sakib = new Player("Sakib", 38, "Bangladesh");
const players: Player[] = [];
players.push(sakib)
players.push(mashrafi);