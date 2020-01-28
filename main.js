"use strict";
exports.__esModule = true;
var ejemplo_1 = require("./ejemplo");
var myPerson;
myPerson = new ejemplo_1.Person("Pepe", 1970, "Calle de la Luz", 2020);
myPerson.printName();
console.log(myPerson.getAge());
myPerson.name = "juan";
console.log(myPerson.name);
