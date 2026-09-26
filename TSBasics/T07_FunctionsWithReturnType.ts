//Normal function
//Function definition
let test1 = function():void
{
    console.log("Anonymous function/function expression.");
}

//Function call
test1();

console.log("------------------------------------------------------");

//Function definition
let test2 = ():void=>
    {
        console.log("Arrow function/function expression.");
    }

//Function call
test2();

console.log("------------------------------------------------------");

//Function Definition
function test3():void
{
    console.log("This is a normal function declaration & call.");
    
}

//Function call
test3();

console.log("------------------------------------------------------");

// Parameter data-type
// Call back function

//Callback Function Business Logic
function calculation(num1:number, num2:number, callBack:Function)
{
    callBack(num1,num2);
}

// Function definition
let add=(a:number,b:number)=>{console.log("Addition is:",(a+b))};
let sub=(a:number,b:number)=>{console.log("Subtraction is:",(a-b))};
let mul=(a:number,b:number)=>{console.log("Multiplication is:",(a*b))};
let div=(a:number,b:number)=>{console.log("Division is:",(a/b))};

//Function call
calculation(100,20,add);
calculation(100,20,sub);
calculation(100,20,mul);
calculation(100,20,div);

console.log("------------------------------------------------------");

// Function definition (without any return-type)
function info(msg:string)
{
    console.log("Information is: " + msg);
}

//Function call
info("Hello All");

console.log("------------------------------------------------------");

// Function definition (with return-type)
function testData(un:string, psw:string):string
{
    return un;
}

let returnData = testData("Admin", "Admin123");
console.log(returnData);

//OR 

console.log(testData("Susmit", "Susmit123"));

console.log("------------------------------------------------------");

function test4():void
{
    console.log("This function doesnot return anything.");
}
test4();

console.log("------------------------------------------------------");

//Function with promises

function myData():Promise<string>
{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Expected data found")
        }, 3000);
    })
}

let functionStatus=myData();
console.log(functionStatus);


//solution how to handle this promise function

async function promiseHandling()
{
    let res:string = await myData();
    console.log(res);
}

promiseHandling();

console.log("------------------------------------------------------");

//Function with promises

function getTraineeName():Promise<String>
{
    return Promise.resolve("Promise resolved.");
}

//Call
console.log(getTraineeName());


function getStatus():Promise<boolean>
{
    return Promise.resolve(true);
}
//Call
console.log(getStatus());

console.log("------------------------------------------------------");

//Functions with optional parameter : ? - This should be always the last parameter

function getNewData(fname:string, age?:number, profile?: string)
{
    console.log("Name is: " + fname);

    if(age){
        console.log("Age is: " + age);
    }

    if(profile){
        console.log("Profile is: " + profile);
    }
}

//Calls
getNewData("Sarang");
getNewData("Ram", 45);
getNewData("Seeta", 40, "API Tester");

//Spread/Rest parameters in function
function getIDs(...id:number[])
{
    console.log(id);
}

//call
getIDs(10,20,30,40,50); //[ 10, 20, 30, 40, 50 ]