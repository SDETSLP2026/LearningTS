

let student1:{readonly id:number, fname:string, readonly subject:string} ={
    id:111,
    fname:"Raj",
    subject:"Java"
}
console.log(student1); //{ id: 111, fname: 'Raj', subject: 'Java' }

//same structure create one more object

let student2:{readonly id:number, fname:string, readonly subject:string} ={
    id:112,
    fname:"Pooja",
    subject:"JavaScript"
}
console.log(student2); //{ id: 112, fname: 'Pooja', subject: 'JavaScript' }

/*
type alise
-----------
- By using same template or structure we can create objects
- To create custom type of object, where we can create first prototype/template and based on the same, we can create objects.
- The type alise create template only for properties of the object, not for method.
*/

//prototype => blueprint or architecture
type studentData = {readonly id:number, fname:string, subject:string, isActive:boolean};

//obj1
let s1:studentData = {
    id:101,
    fname:'Neelam',
    subject:'testing',
    isActive:true
}
console.log("StudentData for s1 using prototype: ", s1);
//StudentData for s1 using prototype:  { id: 101, fname: 'Neelam', subject: 'testing', isActive: true }

let s2:studentData = {
    id:102,
    fname:'Pallavi',
    subject:'testing',
    isActive:true 
}
console.log("StudentData for s2 using prototype: ", s2);
//StudentData for s2 using prototype:  { id: 102, fname: 'Pallavi', subject: 'testing', isActive: true }