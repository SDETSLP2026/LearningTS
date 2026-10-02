/*
DataTypes and Variables - Assignment - 9

PS: Employee Bonus
Create a function:
calculateBonus()
Accept employee salary and calculate a 10% bonus.
*/

function calculateBonus(sal:number):void
{
    console.log(`Employee salary is ${sal}`);
    console.log("The 10% bonus on the salary is: " + (sal*0.10));
}

calculateBonus(55000);

// Employee salary is 55000
// The 10% bonus on the salary is: 5500