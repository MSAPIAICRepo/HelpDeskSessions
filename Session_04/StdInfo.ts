//#!Usr/bin/env node
let iObjects = require("./Students");

let appStds = iObjects.approvedStudents;
let stdObjs = iObjects.studentObj;

for (let s = 0; s < stdObjs.length; s++)
    console.log(`ID = ${stdObjs[s].id}, Name = ${stdObjs[s].name}`);

for (let s = 0; s < appStds.length; s++)
    console.log(`ID = ${appStds[s].id}, Name = ${appStds[s].name}`);
