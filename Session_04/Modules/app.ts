import a from "./export";
import {rejectedStudents,pendingStudents as c, selectedStudents as d} from "./export"
console.log("Student List");

for (let i = 0; i < a.length; i++ ) {
    console.log(`id ${a[i].id} : ${a[i].name}`);
    
}
console.log("Selected Students");

for (let i = 0; i < d.length; i++ ) {
    console.log(`id ${d[i].id} : ${d[i].name}`);
    
}

console.log("Rejected Students");

for (let i = 0; i < rejectedStudents.length; i++ ) {
    console.log(`id ${rejectedStudents[i].id} : ${rejectedStudents[i].name}`);
    
}
console.log("Pending Students");

for (let i = 0; i < c.length; i++ ) {
    console.log(`id ${c[i].id} : ${c[i].name}`);
    
}