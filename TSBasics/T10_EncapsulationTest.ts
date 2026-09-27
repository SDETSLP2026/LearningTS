import {EmployeeData} from "./T09_Encapsulation.js"

//object
let e1:EmployeeData=new EmployeeData(111,"Nidhi");
e1.getData();

e1.setSalary(80000); //Setting new salary
console.log("Revised salary is: " + e1.getSalary());// Retrieve new salary

console.log("\nEmployee Data with revised salary:- ");
e1.getData();