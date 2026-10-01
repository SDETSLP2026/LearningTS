import { Car } from "./T12_Inheritance_Car.js";
import { BMW } from "./T13_Inheritance_BMW.js";

//----------------------------------------------------------------------------------

//Object
console.log("Scenario-1: Parent class ref and Parent class object:Parent");
let alto:Car = new Car(); //object of a parent/base class
alto.start();   //Individual method
alto.refuel();  //Individual method
alto.stop();    //Individual method
alto.price();   //Individual method
/*
Scenario-1: Parent class ref and Parent class object:Parent
Car Class -> start method
Car Class -> refuel method
Car Class -> stop method
Car Class -> price method -> Base price 7L
*/

//----------------------------------------------------------------------------------

console.log("Scenario-2: child class ref and child class object:Parent+child");
let x7:BMW = new BMW(); //object of a chilkd/derived class
x7.autoGearShift(); //Individual method
x7.start();         //Inherited method
x7.refuel();        //Inherited method
x7.stop();          //Inherited method
x7.price();         //Overridden Individual method

/*
Scenario-2: child class ref and child class object:Parent+child
BMW Class ->This car has auto gear shift method.
Car Class -> start method
Car Class -> refuel method
Car Class -> stop method
BMW Class -> price method -> 50L
*/

//----------------------------------------------------------------------------------

//TypeScript: Data Abstraction
console.log("Scenario-3: Parent class ref and child class object:Parent");

let bmwX1:Car = new BMW();
bmwX1.start();  //Individual method
bmwX1.refuel(); //Individual method
bmwX1.stop();   //Individual method
bmwX1.price();  //Overridden method - DataAbstraction
/*
Scenario-3: Parent class ref and child class object:Parent
Car Class -> start method
Car Class -> refuel method
Car Class -> stop method
BMW Class -> price method -> 50L
*/

//----------------------------------------------------------------------------------