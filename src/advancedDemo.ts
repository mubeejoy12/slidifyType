// intersection types
type Itadmin = {
  access: string[];
};
type Employee = {
  name: string;
  startDate: Date;
  skills: string[];
};

type AdminEmployee = Itadmin & Employee;
const employee1: AdminEmployee = {
  name: "adam",
  startDate: new Date(),
  skills: ["Cisco", "Python", "Perl"],
  access: ["admin", "user"],
};
console.log(employee1);

// type guards
interface Human {
  walkingSpeed: number;
}
interface Horse {
  runningSpeed: number;
}
type Mammal = Human | Horse;

function moveMammal(mammal: Mammal) {
  if ("walkingSpeed" in mammal) {
    console.log(`Human is moving at ${mammal.walkingSpeed} km/h`);
  } else {
    console.log(`Horse is moving at ${mammal.runningSpeed} km/h`);
  }
}
moveMammal({ walkingSpeed: 10 });
moveMammal({ runningSpeed: 40 });
