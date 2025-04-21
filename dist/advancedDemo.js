"use strict";
const employee1 = {
    name: "adam",
    startDate: new Date(),
    skills: ["Cisco", "Python", "Perl"],
    access: ["admin", "user"],
};
console.log(employee1);
function moveMammal(mammal) {
    if ("walkingSpeed" in mammal) {
        console.log(`Human is moving at ${mammal.walkingSpeed} km/h`);
    }
    else {
        console.log(`Horse is moving at ${mammal.runningSpeed} km/h`);
    }
}
moveMammal({ walkingSpeed: 10 });
moveMammal({ runningSpeed: 40 });
