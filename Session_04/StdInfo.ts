import penStds from "./Students";           //imports only default exported value
//let iObjects = require("./Students");       //import other than default exported values    
// let appStds = iObjects.approvedStudents;
// let stdObjs = iObjects.studentObj;
// let rejStds = iObjects.rejectedStudents;

//import {appStds, allStds, rejStds } from "./Students";  Error Because no such named export
// import {approvedStudents, studentObj, rejectedStudents } from "./Students";
// let appStds = approvedStudents;
// let stdObjs = studentObj;
// let rejStds = rejectedStudents;

let appStds = penStds.approvedStudents;     //Import All exported multiple 
let stdObjs = penStds.studentObj;
let rejStds = penStds.rejectedStudents;


console.log("All Students");
for (let s = 0; s < stdObjs.length; s++)
    console.log(`ID = ${stdObjs[s].id}, Name = ${stdObjs[s].name}`);

console.log("Approved Students");
for (let s = 0; s < appStds.length; s++)
    console.log(`ID = ${appStds[s].id}, Name = ${appStds[s].name}`);

console.log("Rejected Students");
// rejStds.forEach(items => {
//     console.log(`ID = ${items.id}, Name = ${items.name}`);
// });

for (let item of rejStds){
    console.log(`ID = ${item.id}, Name = ${item.name}`);
};

console.log("Pending Students");
penStds.pendingStudents.forEach(penStd => {
    console.log(`ID = ${penStd.id}, Name = ${penStd.name}`);
});