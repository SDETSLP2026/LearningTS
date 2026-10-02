/*
Arrays - Assignment - 12

PS: Mixed User Input
Create an array that can contain:
Strings
Numbers
Boolean values
Example:

["Kiran",true, "QA", 101]

Iterate through the array and identify the type of each element using typeof.
*/

let person:[string, boolean, string, number] = ["Kiran",true, "QA", 101];

for(let i of person)
{
    console.log(`${i} - it's type is ${typeof i}`);   
}

/*
Kiran - it's type is string
true - it's type is boolean
QA - it's type is string
101 - it's type is number
*/