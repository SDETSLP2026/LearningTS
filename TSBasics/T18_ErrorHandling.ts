/*
In TS, we have Error is a predefined interface which is used to handle the errors in the application.

when error occurs in the code/application, it will interrupt normal flow of execution and it will throw an error message. 
This error message can be handled using try-catch block.

What is Errorhandling
----------------------
- To maintain normal flow of the execution error handling is requireed
- We can handle error by showing some meaningfull message to the user

In Ts we use try-catch to handle error
-----------------------
1.try-catch
2.finally block

*/

/*
//Design a finction which throws some error

function division(num1:number, num2:number):number
{
    if(num2 === 0)
    {
        //throw error
        throw new Error("Divide by 0 error: cannot devide any number by 0");
    }else{
        return num1 / num2;
    }
}

//call
console.log(division(200,10)); //20
console.log(division(200,0)); //Divide by 0 error: cannot devide any number by 0
console.log(division(191,12)); //15.916666666666666

*/

console.log("------------------------------------------------------------------");

let payload={
    "id":111,
    "fname":"Jay"
}

console.log(typeof payload);//object

function parsing()
{
    try{
        let jsObject = JSON.parse("payload"); //is not a valid JSON string, so it will throw error
        console.log(jsObject);
        console.log(typeof jsObject);
    } catch (error) {
        console.error("ERROR Message: Provide valid Json string payload");
    }
}

//Call
parsing(); //ERROR Message: Provide valid Json string payload

console.log("------------------------------------------------------------------");

function division(num1:number, num2:number):number
{
    try{
        if(num2 === 0)
        {
            //throw error
            throw new Error("Divide by 0 error: cannot devide any number by 0");
        } else {
            return num1 / num2;
        }
    } catch (error) {
        console.error("ERROR Message: Please provide second number other than 0!");
        return num2; //returning num2 to avoid undefined return type
    }
}

//call
console.log(division(200,10));
console.log(division(100,0));
console.log(division(191,12));

console.log("---------------------finally block---------------------");

/*
finally block
-----------------
- this is a block to run a special code which is required to run after try-catch block
- e.g. for server connection, database connections, different services etc.
- finally block will run with or without error.
- finally block we can add with try-catch block or only with try block.
*/

// The test is supposed to run on a chrome browser only

function testBrowser(bName: string)
{
    try{
        if(bName === "Chrome")
            {
                console.log("Test executing on Chrome!");
            }else{
                throw new Error("Invalid browser: " + bName);
            }
    } catch (e) {
        console.error("ERROR Message: Please provide chrome as browser name!");
    } 
    finally{
        console.log("Finally block is executing....");
        console.log('Server connection is closed!');
    }
}

//Call
testBrowser("Chrome"); //Test executing on Chrome!
testBrowser("Safari");//Error: Invalid browser: Safari