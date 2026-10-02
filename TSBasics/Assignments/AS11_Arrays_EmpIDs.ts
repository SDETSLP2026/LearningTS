/*
Arrays - Assignment - 11

PS: Employee IDs
Create an array that can contain both numbers and strings because employee IDs may come from different systems.
Example:
101
"EMP102"
103
"EMP104"
Define the appropriate TypeScript type.
Perform the following:
1. Add another numeric ID.
2. Add another string ID.
3. Try adding a boolean value & observe the TypeScript error.

*/

let empIDs:Array<number|string> = [];

// 1. Add another numeric ID.
empIDs.push(101);
empIDs.push(103);
console.log("empIDs accepting numeric values: " + empIDs);
//empIDs accepting numeric values: 101,103


// 2. Add another string ID.
empIDs.push("EMP102");
empIDs.push("EMP104");
console.log("empIDs accepting numeric values: " + empIDs);
//empIDs accepting numeric values: 101,103,EMP102,EMP104

// 3. Try adding a boolean value & observe the TypeScript error.
// empIDs.push(true); Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
