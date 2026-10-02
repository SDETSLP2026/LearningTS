/*
DataTypes and Variables - Assignment - 3

PS: Student Marks
Create variables to store marks of 5 subjects.
Calculate and display:
Total marks
Average marks
Percentage
Use appropriate TypeScript data types.
*/

let sub1:number = 85;
let sub2:number = 90;
let sub3:number = 78;
let sub4:number = 92;
let sub5:number = 88;

let totalMarks:number = sub1 + sub2 + sub3 + sub4 + sub5;
let averageMarks:number = totalMarks / 5;
let percentage:number = (totalMarks / 500) * 100;

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log("Percentage:", percentage);

/*
Total Marks: 433
Average Marks: 86.6
Percentage: 86.6
*/