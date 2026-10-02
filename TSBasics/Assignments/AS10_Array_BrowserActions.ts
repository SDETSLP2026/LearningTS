/*
Arrays - Assignment - 10

PS: Browser Names
Create an array containing:
[Chrome, Firefox, Edge, Safari]
Perform the following:
1. Print all browser names.
2. Add "Opera" to the array.
3. Remove "Safari".
4. Check whether "Chrome" exists in the array.
5. Print the final array.
*/

let browsers:string[] = ["Chrome", "Firefox", "Edge", "Safari"];

console.log("1. Print all browser names.");
console.log(browsers);


console.log(`2. Add "Opera" to the array.`);
browsers.push("Opera");
console.log(browsers);

console.log(`3. Remove "Safari".`);
browsers.splice(3,1);
console.log(browsers);

console.log(`4. Check whether "Chrome" exists in the array.`);
if(browsers.includes("Chrome")){
    console.log("Chrome exists in the array.");
} else {
    console.log("Chrome does not exist in the array.");   
}

console.log(`5. Print the final array.`);
console.log(browsers);

/* Output: 
1. Print all browser names.
[ 'Chrome', 'Firefox', 'Edge', 'Safari' ]
2. Add "Opera" to the array.
[ 'Chrome', 'Firefox', 'Edge', 'Safari', 'Opera' ]
3. Remove "Safari".
[ 'Chrome', 'Firefox', 'Edge', 'Opera' ]
4. Check whether "Chrome" exists in the array.
Chrome exists in the array.
5. Print the final array.
[ 'Chrome', 'Firefox', 'Edge', 'Opera' ]
*/