/*
Method Overloading/Function Overloading -
------------------------------------------
Method can be overloaded only when method is declared with same name in same class multiple times with different signature.

What is different signature
--------------------------
1.Number of parameters
2.Change order of parameters
3.Change type of parameter

Method Overloding/function overloading is not supported in JS and TS

Solution -
---------- 
We can partially achieve this using prototype of a function.
*/

class Test
{
    login()
    {
        console.log("Login with default data");
    }

    
    // login(un:string, psw:string) //Error - Duplicate function implementation
    // {
    //     console.log("Login with parameterized data");
    // }

}

function testLogin()
{

}

//Duplicate function implementation.
// function testLogin()
// {
    
// }

console.log("---------------------------------------------");

//Prototype(structure)
function calculation(num1:number, num2:number):number;
function calculation(num1:string, num2:number):string;
function calculation(num1:number, num2:string):string;
function calculation(num1:boolean, num2:string):string;
function calculation(num1:string, num2:string):string;


function calculation(num1:any, num2:any)
{
    return num1+num2;
}

//call
console.log(calculation(100,100));
console.log(calculation("Hi","hello"));
console.log(calculation("Hello",80));
console.log(calculation(90,"Hi"));
console.log(calculation(true,"hello"));
//calculation(true,false);