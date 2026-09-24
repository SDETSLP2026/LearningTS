/*
Array -
=======
- Array is dynamic data structure in JS/TS
- In TS, we use data type for array

Syntax
=======
let arrayName:type[] = [val1, val2,.....];

*/

//In JS
let sid = [10,20,30,40,50];
console.log(sid);

//In TS
let id:number[] = [100,200,300,400,500]
console.log(id);

//single id
console.log(id[2]);//300
console.log(id[8]);//undefined
console.log(id[-2]);//undefined - Negative indexing is not working in TS