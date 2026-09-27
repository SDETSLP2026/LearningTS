/*
Encapsulation
------------------------------
- Encapsulation means wrapping data and function in a single unit 
- Encapsulation helps to hide the data
- Encapsulation we can achieve by having private data and using public method(getters and setters)

In Ts we can declare private data using 'private' access modifier.

Encapsulation = private data +public method
*/

export class EmployeeData
{
    // data
    eid:number;
    ename:string;
    private salary:number = 50000;

    constructor(eid:number, ename:string)
    {
        this.eid = eid;
        this.ename = ename;
    }

    //method
    getData():void
    {
        console.log("Employee id is: ",this.eid);
        console.log("Employee name is: ",this.ename);
        console.log("Employee salary is: ",this.salary);
    }

    //setter to set the data for private variable
    setSalary(salary:number)
    {
        this.salary = salary;
    }

    getSalary():number
    {
        return this.salary;
    }
}

//object
// let e1:EmployeeData=new EmployeeData(101,"Jay");
// e1.getData();