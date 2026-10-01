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

*/


interface WHO
{
    covid19TestServices():void;
}

interface IMA extends WHO
{
    cardiacTestServices():void;
    dentalCareServices():void;
}

interface USMA extends WHO
{
    physiotherapyServices():void;
    neuropathyServices():void;
}

//---------------------------------------------------------------------

class NobleHS implements IMA,USMA
{
    covid19TestServices(): void {
        console.log("NobleHs......Covid19TestService()");
    }

    physiotherapyServices(): void {
        console.log("NobleHs.......PhysioService()");
    }

    neuropathyServices(): void {
         console.log("NobleHs.......NeroService()");
    }

    cardiacTestServices(): void {
        console.log("NobleHs.......cardioService()");
        
    }

    dentalCareServices(): void {
         console.log("NobleHs.......dentalService()");
    }

    getCustomersDetails()
    {
        console.log("NobleHs.....customerDetails()");
        
    }
}

//---------------------------------------------------------------------

//Object
//Child class ref + Child class object

let n1:NobleHS = new NobleHS();

n1.getCustomersDetails();   //Individual
n1.cardiacTestServices();   //Abstract inherited
n1.dentalCareServices();    //Abstract inherited
n1.neuropathyServices();    //Abstract inherited
n1.physiotherapyServices(); //Abstract inherited
n1.covid19TestServices();   //Abstract inherited

//Parent class ref + Child class object

let i1:IMA = new NobleHS();
i1.cardiacTestServices();   //Abstract inherited
i1.dentalCareServices();    //Abstract inherited
i1.covid19TestServices();   //Abstract inherited

let u1:USMA = new NobleHS();
u1.neuropathyServices();    //Abstract inherited
u1.physiotherapyServices(); //Abstract inherited
u1.covid19TestServices();   //Abstract inherited