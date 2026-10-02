/*
DataTypes and Variables - Assignment - 5

PS: Calculate Based on Input Type
Create a variable:
let input: unknown;
The variable can contain either a number or a string.
If the value is a number:
Multiply it by 10.
Display the result.
If the value is a string:
Convert it to uppercase.
Display the result.
Use typeof to perform type narrowing.
*/

let input: unknown = "StringDataType"; //can be number or string

if (typeof input === "number") {
    let result = input * 10;
    console.log(`The result of multiplying ${input} by 10 is: ${result}`);
    //The result of multiplying 10 by 10 is: 100
}

if (typeof input === "string") {
    let result = input.toUpperCase();
    console.log(`The uppercase version of "${input}" is: ${result}`);
    //The uppercase version of "StringDataType" is: STRINGDATATYPE
}



