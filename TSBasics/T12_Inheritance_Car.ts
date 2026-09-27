/*
Inheritance
----------------
- Acquaring properties of one class (Parent/Base) into ather class (Child/Derived) is Inheritance

Purpose
--------
- To avoid code duplication
- For code/methods reusability
- To achieve Run-time polymorphism

Example
----------
Parent and child relation

How to implement
-----------------
We can define relataion between the classes is called (IS-A) relationship which is achieved using 'extends' keyword.

Note
----------
- Every parent class can access only parent properties
- Every child class can access parent + child properties

Types
===========
1. Single level Inheritance
2. Multi level Inheritance
3. Hierarchical Inheritance


Not implemented by JS but we can implement using TS
---------------------------------------------------
4. Multiple Inheritance
5. Hybrid(Dimond problem)Inheritance

*/


export class Car //Parent OR Base class
{
    price(){
        console.log("Car Class -> price method -> Base price 7L");
    }

    start(){
        console.log("Car Class -> start method");
    }

    stop(){
        console.log("Car Class -> stop method");
    }

    refuel(){
        console.log("Car Class -> refuel method");
    }
}