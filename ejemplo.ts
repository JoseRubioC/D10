 export class Person{
    name : string;
    private age : number;
    yearOfBirth: number;
    address : string;

    constructor(newName:string, yearOfBirth:number, newAddress:string, currentYear:number){
        this.name = newName;
        this.yearOfBirth = yearOfBirth;
        this.address = newAddress;
        this.age = currentYear - yearOfBirth;
    }

    printName (){
        console.log(this.name);
    }

    getAge():number{
        return this.age;
    }
}