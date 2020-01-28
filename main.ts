import {Person} from "./ejemplo"

let myPerson : Person

myPerson = new Person("Pepe", 1970, "Calle de la Luz", 2020)

myPerson.printName()

console.log(myPerson.getAge())

myPerson.name = "juan";