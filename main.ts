// number type
let mynumb = 10;
let anothernumb: number = 20;

mynumb = 30;
anothernumb = "40";

// string and boolean type
let mystr: string = "hello";
let anotherStr = "world";

mystr = true;
anotherStr = "fatimoh";

// boolean type
let mybool: boolean = false;
let anotherBool = false;

mybool = true;
anotherBool = "hi";

// inferred type
let salary;
salary = 12000;
salary = "12000";
salary = true;

// inferred
let salary;
salary = 12000;
salary = "12000";
salary = true;

// object with no type
const developer = {
  firstName: "adam",
  lastName: "smith",
  age: 30,
  isTrainer: false,
};

// object with type
const newDeveloper: { name: string; age: number; isTrainer: boolean } = {
  name: "adam",
  age: 30,
  isTrainer: false,
};

newDeveloper.name = "bolu";
newDeveloper.age = "forty";
newDeveloper.isTrainer = 40;

// array with type
const languages = ["html", "css", "js"];
languages.push;
languages.push(1);
languages.push(true);

// complex array
const arrOfObj: { name: string; age: number }[] = [
  { name: "adam", age: 30 },
  { name: "john", age: 25 },
];

// array of array
const arrOfArrays: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

arrOfArrays.push([10, 11, 12]);
arrOfArrays.push([10, 11, "12"]);

// function
const addNum = (num1, num2) => {
  return num1 + num2;
};
addNum(1, 2);
addNum(1, "2");
addNum(1, true);

// function with type
const multiNumb = (num1: number, num2: number) => {
  return num1 + num2;
};
multiNumb(1, 2);
multiNumb(1, "2");

const modNumber = (num1: number, num2: number): number => {
  // return num1 % num2;
  return num1 > num2;
};
modNumber(10, 20);
modNumber(10, "20");

const printSum = (num1: number, num2: number): void => {
  console.log(num1 + num2);
};
printSum(10, 20);
printSum(10, "20");

const isEven = (num: number): boolean => {
  return num % 2 === 0;
};
isEven(10);

const printFullName = (firstName: string, lastName: string): void => {
  console.log(`{firstName} ${lastName}`);
};
printFullName("adam", "smith");

const getStringLength = (name: string): number => {
  return name.length;
};
getStringLength("adam");

const safeSubtract = (num1: number, num2: number): number => {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
};

safeSubtract(10, 20);

// union type
let numOrStr: number | string;

numOrStr = 10;
numOrStr = "10";
numOrStr = true;

let Arr: (number | string)[] = [1, "mubara"];

// literal types
let myLiteral: "adam" | "john" | "smith";
myLiteral = "adam";
myLiteral = "mubaral";

enum TrafficLight {
  red,
  yelow,
  green,
}

const getTrafficLightMessage = (light: TrafficLight): string => {
  if (light === TrafficLight.red) {
    return "stop";
  }
  if (light === TrafficLight.yelow) {
    return "Prepare to stop!";
  }
  if (light === TrafficLight.green) {
    return "Go!";
  }
};

// optional type
let optionalObj: { name: string; age: number | undefined } = {
  name: "adam",
  age: undefined,
};

let betterObj: { name: string; age?: number } = {
  name: "adam",
};

// interfaces
interface Developer {
  name: string;
  age: number;
  isTrainer: boolean;
}

const persom1: Developer = {
  name: "adam",
  age: 30,
  isTrainer: false,
};

const person2: Developer = {
  name: "john",
  age: 25,
  isTrainer: true,
};

// interface can only be used to define the shape of an object while type can be used to define shape of an object, array, function, union type, intersection type

// type
type DeveloperType = {
  name: string;
  age: number;
  isTrainer: boolean;
};

const person3: DeveloperType = {
  name: "adam",
  age: 30,
  isTrainer: false,
};

type personName = string;

const person4: personName = "adam";

type coderType = {
  name: string;
  category: "frontend" | "backend" | "fullstack";
  age: number;
}[];

const coder: coderType = [
  { name: "adam", category: "frontend", age: 30 },
  { name: "john", category: "backend", age: 25 },
  { name: "smith", category: "fullstack", age: 35 },
];

// type
type DeveloperNwType = {
  name: string;
  age: number;
  isDev: boolean;
};

const person5: DeveloperNwType = {
  name: "adam",
  age: 30,
  isDev: true,
};

console.log(
  `${person5.name} is a ${person5.isDev} dev and is a ${person5.age} years old`
);

type PersonNewName = string;
const person6: PersonNewName = 'Mousam';
console.log(`New Developer is ${person6}`);
// Classes and Interfaces

// class

// class CreateRoom {
//   public room: string;
//   private family: string[] = [];
//   constructor(name: string) {
//     this.room = `${name}s room`;
//   }

//   addFamilyMember(member: string) {
//     this.family.push(member);
//   }
//   showFamily() {
//     console.log(this.family);
//   }

//   cleanRoom(soap: string) {
//     console.log("Cleaning ${this.room} with ${soap}");
//   }
// }

// const nabendu = new CreateRoom("Nabendu");
// const shikha = new CreateRoom("Shikha");
// const hriday = new CreateRoom("Hriday");
// const mousam = new CreateRoom("Mousam");
// nabendu.showFamily();
// nabendu.addFamilyMember("Nabendu");
// shikha.addFamilyMember("Shikha");
// hriday.addFamilyMember("Hriday");
// mousam.cleanRoom("Lizol");
class CreateRoom {
  public room: string;
  private family: string[] = [];
  readonly dobShikha: string = "1982-12-12";
  private readonly dobHriday: string = "2013-12-12";
  constructor(name: string) {
    this.room = "${name}s room";
  }
}

const nabendu = new CreateRoom("Nabendu");
const shikha = new CreateRoom("Shikha");
const hriday = new CreateRoom("Hriday");
const mousam = new CreateRoom("Mousam");
shikha.dobShikha;
shikha.dobShikha = "1982-11-12";
hriday.dobHriday;

