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
