/*
Objects - 
---------
- which has state & behavior
- In JS - Key:Value
- Object literal
- Class level


*/

//In JS
let user = {
    name: "Swapnil",
    id: 1010,
    city: "Pune",
    profile: "SDET"
}

console.log(user); //{ name: 'Swapnil', id: 1010, city: 'Pune', profile: 'SDET' }
console.log(typeof user);//object


//insert a new property
// user.phno = 898989; - Property 'phno' does not exist on type '{ name: string; id: number; city: string; profile: string; }'.


let newUser:{id:number, fname:string, address:string} = {
    id: 101,
    fname: "Sneha",
    address: "Pune"
}

console.log(newUser); //{ id: 101, fname: 'Sneha', address: 'Pune' }

//insert a new property
// newUser.address = "Mumbai"; - Property 'address' does not exist on type '{ id: number; fname: string; }'.
//To add address - change the signature and add it in the base version of object. This is typesafety

newUser.address = "Navi Mumbai";
console.log(newUser); //{ id: 101, fname: 'Sneha', address: 'Navi Mumbai' }

newUser.id = 202;;
console.log(newUser); //{ id: 202, fname: 'Sneha', address: 'Navi Mumbai' }


//--------------------------------------------------------------------------------------

/*
readonly property - playwright
---------------------------------
- readonly prevents a property or array element from being reassigned after initialization.
- once you define, you cannot reassign/change the value.

const
---------
- const protects the var/ref.
- readonly protects the property/element.
*/

let updatedUser:{readonly id:number, fname:string, address:string} = {
    id: 101,
    fname: "Sneha",
    address: "Pune"
}

//here, id is assigned with value only at the time of object creation but now you cannot reassign.

// updatedUser.id = 888; //- Cannot assign to 'id' because it is a read-only property.

//Example 2

let appData:{readonly baseUrl:string, readonly browser:string} = {
    baseUrl: "https://www.google.com",
    browser: "Chrome"
}

console.log(appData);


//--------------------------------------------------------------------------------------