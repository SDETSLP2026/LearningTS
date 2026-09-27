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

*/

abstract class Page
{
    //Example of implemented method - MethodName+Body
    pageLoad():void{
        console.log("The page is loading...");
    }

    //Example of non-implemented method - MethodName without body
    abstract getTitle():void;

}

// let p1:Page = new Page(); //Cannot create an instance of an abstract class.
// An object cannot be created for abstract class.


//To call and implement abstract methods, we need a child class of a base abstract class.
class LoginPage extends Page
{
    override getTitle(): void {
        console.log("Get the title of Application.....Implemented by child"); 
    }

    gotoLoginPage()
    {
        console.log("This will open Login page first...");    
    }
}

//Object
//Scenario-1: Child class ref and Child class object: can access parent + child due to inheritance
let l1:LoginPage = new LoginPage();
l1.pageLoad();          //Inherited method
l1.gotoLoginPage();     //Individual method
l1.getTitle();          //Inherited abstract method
/*
The page is loading...
This will open Login page first...
Get the title of Application.....Implemented by child
*/

//Scenario-2: Parent class ref and Child class object: can access parent only
let l2:Page = new LoginPage();
l2.pageLoad();          //Individual method
l2.getTitle();          //Overridden method from Child class
/*
The page is loading...
Get the title of Application.....Implemented by child
*/