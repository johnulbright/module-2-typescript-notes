class Person{
    firstName:string;
    lastName:string;

    sayHello(){
        console.log("Hello", this.firstName);
    }

    sayHelloToFullName(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let phil=new Person();
phil.firstName='Phil';
phil.lastName='Donahue';

console.log(phil)
phil.sayHello()

let me=new Person()
console.log(me)
me.firstName='John'
me.lastName='Ulbright'
// me.middleName="Robert"  
// ^^^^^^^^^^^^^^^^^^^^^^ doesn't work! middleName is not a property of Person
console.log(me)
me.sayHelloToFullName();

class Game{
    constructor(name:string,maker:string){
        this.gameName=name;
        this.gameMaker=maker;
    }
    gameName:string;
    gameMaker:string;
}

let battleship=new Game('Battleship',"Hasbro")
console.log(battleship);
// let sorry=new Game;
// ^^^^^^^^^^^^^^^^^^ doesn't work because Game requires 2 arguments

class Vehicle{
    type:string;
    make:string;
    model:string;
    manufacturer:string;
    manufactureYear:number;
    runs:boolean;
    topSpeed:number;
}

class Automobile extends Vehicle{
    isSelfDriving:boolean;
}

let myCar=new Automobile();
myCar.make='Subaru';
myCar.model='Outback'
myCar.manufactureYear=2012;
myCar.isSelfDriving=false;

console.log(myCar);

class Motorcycle extends Vehicle{
    isEasyToDoWheelie:boolean;
}

let myMotorcycle=new Motorcycle();
myMotorcycle.isEasyToDoWheelie=true;
myMotorcycle.topSpeed=350;

class Animal{
    isMammal:boolean
    legCount:number
    name:string;
}

class Bear extends Animal{
    isMammal=true;
    legCount=4;
    species:string;
    isEndangered:boolean;
}

let baloo=new Bear()
baloo.name="Baloo"
baloo.species="grizzly"
console.log(baloo);
console.log(baloo.name)
baloo.isMammal=false;
console.log(baloo)

/* The code below follows a common pattern that can be written more elegantly
class Store{
    constructor(name:string,city:string){
        this.name=name;
        this.city=city;
    }
    name:string;
    city:string;
}
*/
class Store{
    constructor(public name:string,public city:string){}
}

let ikea:Store=new Store('Ikea','Fishers');
console.log(ikea);

class Employee extends Person{
    private _salary:number;
    getSalary():string{
        return this._salary.toString();
    }
    setSalary(newSalary:number){
        this._salary=newSalary;
    }
}

let newEmployee=new Employee();
newEmployee.setSalary(30000);
let salaryResult=newEmployee.getSalary();
console.log("The salary is:",salaryResult);
console.log(newEmployee);
// console.log(newEmployee._salary)
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ doesn't work since _salary is private
// newEmployee._salary=50;
// ^^^^^^^^^^^^^^^^^^^^^^^ doesn't work since _salary is private