var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hello", this.firstName);
    };
    Person.prototype.sayHelloToFullName = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Person;
}());
var phil = new Person();
phil.firstName = 'Phil';
phil.lastName = 'Donahue';
console.log(phil);
phil.sayHello();
var me = new Person();
console.log(me);
me.firstName = 'John';
me.lastName = 'Ulbright';
// me.middleName="Robert"  
// ^^^^^^^^^^^^^^^^^^^^^^ doesn't work! middleName is not a property of Person
console.log(me);
me.sayHelloToFullName();
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', "Hasbro");
console.log(battleship);
// let sorry=new Game;
// ^^^^^^^^^^^^^^^^^^ doesn't work because Game requires 2 arguments
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.make = 'Subaru';
myCar.model = 'Outback';
myCar.manufactureYear = 2012;
myCar.isSelfDriving = false;
console.log(myCar);
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.isEasyToDoWheelie = true;
myMotorcycle.topSpeed = 350;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMammal = true;
        _this.legCount = 4;
        return _this;
    }
    return Bear;
}(Animal));
var baloo = new Bear();
baloo.name = "Baloo";
baloo.species = "grizzly";
console.log(baloo);
console.log(baloo.name);
baloo.isMammal = false;
console.log(baloo);
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
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
console.log(ikea);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
var salaryResult = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
console.log(newEmployee);
// console.log(newEmployee._salary)
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ doesn't work since _salary is private
// newEmployee._salary=50;
// ^^^^^^^^^^^^^^^^^^^^^^^ doesn't work since _salary is private
//# sourceMappingURL=03-classes.js.map