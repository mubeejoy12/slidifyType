// number type 
let mynumb = 10
let anothernumb: number = 20

mynumb = 30
anothernumb = '40'

// string and boolean type
let mystr: string = "hello"
let anotherStr = "world"

mystr = true
anotherStr = 'fatimoh'

// boolean type
let mybool: boolean = false
let anotherBool = false

mybool = true
anotherBool = 'hi'

// inferred type
let salary;
salary= 12000
salary = '12000'
salary = true

// inferred
let salary:number;
salary = 12000;
salary = '12000';
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
// array with type
const languages = ["html", "css", "js"];
languages.push;
languages.push(1);
languages.push(true);
const arrOfObj: { name: string; age: number }[] = [
  { name: "adam", age: 30 },
  { name: "john", age: 25 },
];
const arrOfArrays: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

arrOfArrays.push([10, 11, 12]);
arrOfArrays.push([10, 11, "12"]);
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

let numOrStr: number | string;

numOrStr = 10;
numOrStr = "10";
numOrStr = true;

let Arr: (number | string)[] = [1, "mubara"];

let myLiteral: "adam" | "john" | "smith";
myLiteral = "adam";
myLiteral = "mubaral";

