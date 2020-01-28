"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(newName, yearOfBirth, newAddress, currentYear) {
        this.name = newName;
        this.yearOfBirth = yearOfBirth;
        this.address = newAddress;
        this.age = currentYear - yearOfBirth;
    }
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
exports.Person = Person;
