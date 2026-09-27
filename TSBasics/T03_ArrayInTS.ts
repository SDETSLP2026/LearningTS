/*
Array -
=======
- Array is dynamic data structure in JS/TS
- In TS, we use data type for array

Syntax - 1
===========
let arrayName:type[] = [val1, val2,.....];


Syntax - 2
===========
let arrName:Array<type>= [val1, val2,..... valn]
*/

//In JS
let sid = [10,20,30,40,50];
console.log(sid);

//In TS
let id:number[] = [100,200,300,400]
console.log(id);

//single id
console.log(id[2]);//300
console.log(id[8]);//undefined
console.log(id[-2]);//undefined - Negative indexing is not working in TS

// push, pop - Last Element AND shift & unshift - First Element

// push() - Adding elements at the last
id.push(500,600,700); 
console.log(id);


//To get count of total elements in an array
console.log("Total count of ids are: " + id.length); // 7

// unshift() - Adding elements at the first
id.unshift(70,80,90); 
console.log(id); // [ 70,  80,  90, 100, 200, 300, 400, 500, 600, 700 ]

// pop() - Removing element at the last
let lastDelEle = id.pop(); 
console.log(lastDelEle); // 700
console.log(id); //[ 70,  80,  90, 100, 200, 300, 400, 500, 600 ]

// shift() - Removing element at the first
let firstDelEle = id.shift(); 
console.log(firstDelEle); //70
console.log(id); //[ 80,  90, 100, 200, 300, 400, 500, 600 ]

//slice() - to print the chunk of an array e.g. index 2 to end
let sliceEx1 = id.slice(2);
console.log("Array (from index 2 to end): " + sliceEx1); 
// Array (from index 2 to end): 100,200,300,400,500,600

let sliceEx2 = id.slice(2,5); //last index-1 i.e. 4
console.log("Array (from index 2 to 5): " + sliceEx2);
// Array (from index 2 to 5): 100,200,300


//splice() - remove/insert at any position
// splice(startingIndex, countOfElesToBeDeleted, ElementsToBeInserted)
id.splice(1,0,1100); //From starting index 1, don't delete anything, add 1100
console.log(id); //[ 80, 1100,  90, 100,  200, 300, 400,  500, 600 ]

id.splice(1,1); // Starting index 1, Delete 1 element
console.log(id); //[ 80, 90, 100,  200, 300, 400,  500, 600 ]

//Search or find elements in an array - includes()

let location:string[] = ["Pune", "Mumbai", "Delhi"];

for(let i of location)
{
    if(i.includes("Delhi"))
    {
        console.log("Location available: " + i);
    }
}

let res = location.filter((ele)=>{
    if(ele === "Pune")
        return ele;
})

console.log(res);


console.log("-------------Array declaration Syntax 2----------");

let product:Array<string> = ['laptop','keyboard','mobile','desktop'];
console.log(product); //[ 'laptop', 'keyboard', 'mobile', 'desktop' ]

//Array with different types
// let data:string|number[] = [1234, 'abcd']; - Type '(string | number)[]' is not assignable to type 'string | number[]'.
let data:Array<string|number> = [1234, 'abcd'];
console.log(data); //[ 1234, 'abcd' ]
 

//----------------------------------------------------------------------------

/*
Tuple / Tuple Array-
---------------------
a tuple is a typescript array type where the number, order and types of elements 
are known and defined in advance. (Static length)
*/

let personData:[string, string, number, boolean] = ['Sarang', 'Pune', 1234, true];
console.log(personData);



// Define login credentials Username+Password

let loginData:[string,string] = ["Admin", "Admin123"];
console.log(loginData[0]); //Admin
console.log(loginData[1]); //Admin123

//API: Schema validation: AJV library


// loginData:[number, string] = [123,""] - Cannot change signature as redeclaration is not allowed
