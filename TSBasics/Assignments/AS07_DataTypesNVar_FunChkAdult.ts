/*
DataTypes and Variables - Assignment - 7

PS: Check Adult
Create a function:
checkAge()
Accept age as a number.
Return:
"Adult" if age >= 18
"Minor" otherwise
Define the return type explicitly.
*/

function checkAge(age:number):string
{
    if(age >= 18) return "Adult"
    else return "Minor";
}


console.log(checkAge(9)); //Minor
console.log(checkAge(22)); //Adult