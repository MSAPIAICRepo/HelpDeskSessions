//We need to add first "resolveJsonModule": true in tsconfig.json file it might not be there
//then we need to import json file in our program like this
//In Package.json 
//    Type = CommonJS

import * as data from "./Students.json";
console.log(data.StudentDetails);