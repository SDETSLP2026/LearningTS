/*
DataTypes and Variables - Assignment - 6

PS: Data Type Identifier
Create a function:
function identifyData(data: unknown): string
The function should identify whether the supplied value is:
String
Number
Boolean
Array
Object
Return the appropriate data type as a string.
Test the function with at least 5 different values
*/

function identifyData(data: unknown): string
{
    switch (typeof data) {
        case 'string': return "The given input is of string type."
            break;
        
        case "number": return "The given input is of number type."
            break;
        
        case "boolean": return "The given input is of boolean type."
            break;

        // case "array": return "The given input is of array type."
        // Type '"array"' is not comparable to type '"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"'.
        //     break;
        
        case "object": return "The given input is of object type."
            break;
    
        default: console.log("Enter valid input");
            break;
    }

}

console.log(identifyData("String"));                        //The given input is of string type.
console.log(identifyData(100));                             //The given input is of number type.
console.log(identifyData(true));                            //The given input is of boolean type.
console.log(identifyData([10,20,30,40,50]));                //The given input is of object type.
console.log(identifyData({id:101, fname:"Sinamika"}));      //The given input is of object type.