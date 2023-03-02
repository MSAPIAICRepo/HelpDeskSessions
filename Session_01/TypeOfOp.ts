let age=10;  //Type Infer    //Declare a variable with the name of age in memory 
let age1: number=10;    //Type Annotation
let name1: string="Alfanso";let isMale: boolean=true;
let testVariable = 1; 

console.log(typeof testVariable);
console.log(typeof age);
console.log(typeof name1);
console.log(typeof age1);

let myvar : string | null | number; //Union Type Compound Types
myvar = "Alfanso";
console.log(typeof myvar);

myvar = null;
console.log(typeof myvar);

myvar = 9;
console.log(typeof myvar);






