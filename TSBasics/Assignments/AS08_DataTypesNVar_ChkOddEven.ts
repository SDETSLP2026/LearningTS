/*
DataTypes and Variables - Assignment - 8

PS: Create a function:
checkEvenOdd()
Accept a number and return:
"Even" or "Odd"
Return type should be string.
*/

function checkEvenOdd(num:number):string
{
    if(num%2 == 0) return "Even"
    else return "Odd";
}

console.log(checkEvenOdd(9)); //Odd
console.log(checkEvenOdd(200)); //Even
