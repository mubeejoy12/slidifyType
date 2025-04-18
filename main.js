// number type
var mynumb = 10;
var anothernumb = 20;
mynumb = 30;
anothernumb = "40";
// string and boolean type
var mystr = "hello";
var anotherStr = "world";
mystr = true;
anotherStr = "fatimoh";
// boolean type
var mybool = false;
var anotherBool = false;
mybool = true;
anotherBool = "hi";
// inferred type
var salary;
salary = 12000;
salary = "12000";
salary = true;
// inferred
var salary;
salary = 12000;
salary = "12000";
salary = true;
// object with no type
var developer = {
    firstName: "adam",
    lastName: "smith",
    age: 30,
    isTrainer: false,
};
// object with type
var newDeveloper = {
    name: "adam",
    age: 30,
    isTrainer: false,
};
newDeveloper.name = "bolu";
newDeveloper.age = "forty";
newDeveloper.isTrainer = 40;
// array with type
var languages = ["html", "css", "js"];
languages.push;
languages.push(1);
languages.push(true);
// complex array
var arrOfObj = [
    { name: "adam", age: 30 },
    { name: "john", age: 25 },
];
// array of array
var arrOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
arrOfArrays.push([10, 11, 12]);
arrOfArrays.push([10, 11, "12"]);
// function
var addNum = function (num1, num2) {
    return num1 + num2;
};
addNum(1, 2);
addNum(1, "2");
addNum(1, true);
// function with type
var multiNumb = function (num1, num2) {
    return num1 + num2;
};
multiNumb(1, 2);
multiNumb(1, "2");
var modNumber = function (num1, num2) {
    // return num1 % num2;
    return num1 > num2;
};
modNumber(10, 20);
modNumber(10, "20");
var printSum = function (num1, num2) {
    console.log(num1 + num2);
};
printSum(10, 20);
printSum(10, "20");
var isEven = function (num) {
    return num % 2 === 0;
};
isEven(10);
var printFullName = function (firstName, lastName) {
    console.log("{firstName} ".concat(lastName));
};
printFullName("adam", "smith");
var getStringLength = function (name) {
    return name.length;
};
getStringLength("adam");
var safeSubtract = function (num1, num2) {
    if (num1 > num2) {
        return num1 - num2;
    }
    else {
        return num2 - num1;
    }
};
safeSubtract(10, 20);
// union type
var numOrStr;
numOrStr = 10;
numOrStr = "10";
numOrStr = true;
var Arr = [1, "mubara"];
// literal types
var myLiteral;
myLiteral = "adam";
myLiteral = "mubaral";
var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["red"] = 0] = "red";
    TrafficLight[TrafficLight["yelow"] = 1] = "yelow";
    TrafficLight[TrafficLight["green"] = 2] = "green";
})(TrafficLight || (TrafficLight = {}));
var getTrafficLightMessage = function (light) {
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
var optionalObj = {
    name: "adam",
    age: undefined,
};
var betterObj = {
    name: "adam",
};
var persom1 = {
    name: "adam",
    age: 30,
    isTrainer: false,
};
var person2 = {
    name: "john",
    age: 25,
    isTrainer: true,
};
var person3 = {
    name: "adam",
    age: 30,
    isTrainer: false,
};
var person4 = "adam";
var coder = [
    { name: "adam", category: "frontend", age: 30 },
    { name: "john", category: "backend", age: 25 },
    { name: "smith", category: "fullstack", age: 35 },
];
var person5 = {
    name: "adam",
    age: 30,
    isDev: true,
};
console.log("".concat(person5.name, " is a ").concat(person5.isDev, " dev and is a ").concat(person5.age, " years old"));
var person6 = "Mousam";
console.log("New Developer is ".concat(person6));
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
// Private and Read-Only Variables
var CreateRoom = /** @class */ (function () {
    function CreateRoom(name) {
        this.family = [];
        this.dobShikha = "1982-12-12";
        this.dobHriday = "2013-12-12";
        this.room = "${name}s room";
    }
    return CreateRoom;
}());
var nabendu = new CreateRoom("Nabendu");
var shikha = new CreateRoom("Shikha");
var hriday = new CreateRoom("Hriday");
var mousam = new CreateRoom("Mousam");
shikha.dobShikha;
shikha.dobShikha = "1982-11-12";
hriday.dobHriday;
var LibraryBook = /** @class */ (function () {
    function LibraryBook(bookTitle, bookAuthor, publishedYear) {
        this.isBorrowed = false;
        this.title = bookTitle;
        this.author = bookAuthor;
        this.yearPublished = publishedYear;
    }
    LibraryBook.prototype.borrowBook = function () {
        this.isBorrowed = true;
        console.log("You have borrowed \"".concat(this.title, "\""));
    };
    LibraryBook.prototype.returnBook = function () {
        this.isBorrowed = false;
        console.log("You have returned \"".concat(this.title));
    };
    LibraryBook.prototype.getStatus = function () {
        if (this.isBorrowed) {
            console.log("\"".concat(this.title, "\" is currently borrowed"));
        }
        else {
            console.log("\"".concat(this.title, "\" is available"));
        }
    };
    return LibraryBook;
}());
var book1 = new LibraryBook("The Alchemist", "Paulo Coelho", 1988);
book1.getStatus(); // "The Alchemist is available"
book1.borrowBook(); // "You have borrowed The Alchemist"
book1.getStatus(); // "The Alchemist is currently borrowed"
book1.returnBook(); // "You have returned The Alchemist"
