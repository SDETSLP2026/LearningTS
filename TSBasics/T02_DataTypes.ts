/*
JS Data types

Primitives (7)
JS - number, string, boolean, undefined, null, bigInt, Symbol
TS - any, unknown, union, void, never 

Non-primitives(2)
- any object comes under Non-primitive category
- Object, Array, Number, String, Boolean
*/

//1. number: status code, timeout 
let age:number = 25;
let timeout:number = 30000;
let statusCode:number = 200;

console.log("Age: " + age);
console.log("Autowait timeout: " + timeout);
console.log("API Status Code: " + statusCode);

//---------------------------------------------------------------------

//2. boolean(true/false): test conditions, flags
 let isUserLoggedIn:boolean = true;
 let isActive:boolean = false;
 let isPaymentSuccessful:boolean = true;
console.log("Boolean Data");

 console.log("User login status: " + isUserLoggedIn);
 console.log("Active status: " + isActive);
 console.log("Payment status: " + isPaymentSuccessful);
 
 //---------------------------------------------------------------------

 //3. string: url, name, password, message

 let username:string = "Admin";
 let password:string = "admin123";
 let url:string = `https://www.google.com/`;

 console.log(`User credentials are: ${username} & ${password}.`); //Template string
 console.log(`The baseURL is: ${url}`);

//---------------------------------------------------------------------
 
//4. null (intentionally we are adding empty values)

let browserName = null;
console.log(browserName); //null
console.log(typeof browserName); //object

//---------------------------------------------------------------------

// 5. undefined (when a variable is declared but the value is not assigned, then it is undefined)

let browserVersion;
console.log(browserVersion); //undefined
console.log(typeof browserVersion); //undefined

//---------------------------------------------------------------------

console.log("------Typescript Data Types------");

//6. any type: legacy/dynamic data (Mostly in case of APIs)

/*
any:
- Typescript allows almost anything.
- Type checking is largely disabled.
- Use it carefully.
*/

let bookingID:any;
bookingID = 1234;
bookingID = "ABCD";
bookingID = "123abc";
bookingID = true;

console.log("Booking ID is: " + bookingID); //true

//---------------------------------------------------------------------

//7. unknown: API response / External data that we cannot trust/known
/*
- Type is not known yet.
- We must validate/narrow the type before using it.
- Safer than any.
*/

let responseData:unknown;

responseData = 1234;
responseData = "abcd";

console.log(responseData); //abcd
console.log(typeof responseData);// string

//---------------------------------------------------------------------

//8. Union ( | ) pipe signature - In automation it is useful
/*
a variable can store 2 types of values
*/

let postalCode:number|string;

postalCode = 410206;
postalCode = "410206";
// postalCode = true; - Type 'boolean' is not assignable to type 'string | number'.

//validate postal code
function enterPostalCode(code:string|number){
    console.log(`Postal Code is ${code}`);
}

enterPostalCode(411014);
enterPostalCode("411052");

//---------------------------------------------------------------------
/*Function
9. void - return type (applicable for functions only) -> When a function returns nothing, we need to use return type as void.
*/

//EX#01
function greet():void
{
    console.log("Hello World");
}

greet();

//EX02

let title = "Google";

function getTitle():string
{
    return title;
}

let tabTitle = getTitle();
console.log(tabTitle);
//OR
console.log("Application Title is: " + getTitle());


//---------------------------------------------------------------------
/*Function
10. never - return type (applicable for functions only) used for framework level error handling

never, we uses as function return type and never means the function never complete or execute normally.

in automation, while designing framework if you wanted to add utilities which returns/throws error - you can use never.

Error is a predefined class in JS/TS.
*/

//Scenario: Looking for an element to identiy if element not found, it should return you an error.


//Utility which throws an error
function throwLocatorError(element:string):never
{
    throw new Error(`${element} - Element Not found...!`);
}

// throwLocatorError(`Forgot Password Link`); - Commenting So that the further code can be made runnable

//---------------------------------------------------------------------

//11. bigInt: Largest integer value we use bigInt

//let transactionID:bigint = 9876541236987525312n; //ES6 -> ES2020
//console.log("Transaction ID is: " + transactionID);

//---------------------------------------------------------------------

//12. symbol: unique properties
let data = Symbol("TestData")

let user1 = {
    [data] : {
        username : "Admin",
        role : "Admin"
    }
}

console.log(user1);
console.log(user1[data]);
console.log(user1[data]?.username); //Optional parameters - ?
console.log(user1[data]?.role); //Optional parameters - ?

//In automation we never use Symbol type

