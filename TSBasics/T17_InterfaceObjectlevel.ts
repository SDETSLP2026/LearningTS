/*
Data Abstraction
================
It is process of hiding implementation details of software from end user.

What is purpose?
---------------------
- Information hiding
- To achieve code confidentiality

Example
----------
ATM
Google Map

Abstraction can be achived using
---------------------------------
1.Abstarct class (partial abstarction)
2.Interface (100% abstraction)

1.Abstarct class
===============
1. In abstract class we can have both abstract and non-abstract (concreate) methods.
2. We can declare abstract method and abstract class - using 'abstract' keyword.
3. Abstract class can not be instantiated. (Object cannot be created)
4. Abstract methods must be overriden by class which inherits abstract class.
This means every abstract method should be implemented through its child class.
5. Using Abstract class partial abstraction is possible.
6. Inheritance use 'extends' keyword and Interface use 'implements' keyword.

Interface
==============
- Interface is special class where we can have by-default all the methods are public & abstract.
- We cannot create an object for an Interface.
- Interface methods are implemented by its child class.
- Interface help to achieve multiple inheritance & hybrid inheritance.

In Typescript we can use interface at two levels
---------------------------------------------------
1.Object level interface/prototype based interface
2.Class level interface

type alise vs interface
------------------------------
- type alises can have only key types.
- interface can have key types and methods.

*/

//declaring for person object datatype
type person = {
    id:number,
    name:string,
    profile: string
}

//object
let person1:person = {
    id: 101,
    name: "John",
    profile: "Software Engineer"
}

console.log(person1); //{ id: 101, name: 'John', profile: 'Software Engineer' }

console.log("---------------------------------------------------");

//Interface based on object literal
interface product{
    //data
    pid:number,
    prodName:string,
    price:number,

    //methods
    getData():void
}

let product1:product = {
    pid: 111,
    prodName: "iPhone 20 Pro Max",
    price: 200000,

    getData(): void {
        console.log("Fetching data from product1");
    }
}

let product2:product = {
    pid:222,
    prodName:"Laptop",
    price:700000,
    
    getData() {
        console.log("Fetching data from product2");   
    }
}

console.log(product1);
/*
{
  pid: 111,
  prodName: 'iPhone 20 Pro Max',
  price: 200000,
  getData: [Function: getData]
}
*/
console.log(product1.pid); //111

console.log(product2);
/*
{
  pid: 222,
  prodName: 'Laptop',
  price: 700000,
  getData: [Function: getData]
}
*/
console.log(product2.pid); //222

//Calling methods
product1.getData(); //Fetching data from product1
product2.getData(); //Fetching data from product2