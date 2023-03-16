let tempArray = [];
let cnics :number[] = [];         //Empty Array; declare but not initialize 
let names :string[] = [];       
let cLanguages = ["C#", "Java","C++","COBOL","Assembly","TypeScript"];


let mixArray : (string|number)[] = ["Alpha", 124];
mixArray.push("Mix String # 1")
mixArray.push(9211);
//mixArray.push(true);
//console.log(mixArray);

let mixArray2 : string[] | number[] = [123];

mixArray2.push(123);
mixArray2.push(234);
mixArray2.push(34);
mixArray2.push(11);
console.log(mixArray2);

//let copyofArray = mixArray2.slice();
//let copyofArray = mixArray2.copyWithin(0,0);
//console.log(copyofArray);

//copyofArray = mixArray2.copyWithin(-1,0);
//console.log(copyofArray); 

//copyofArray = mixArray2.copyWithin(1,0);
////console.log(copyofArray);

let oldArray = mixArray2;
oldArray.push(999);

console.log(mixArray2.includes(11));

mixArray2 = ["Alpha", "Beta", "Gamma"]; //All previours data lost
//console.log(mixArray2);
console.log(oldArray);

//mixArray.reverse().reverse();
//console.log(mixArray);
console.log();

mixArray.length;

let myObj = 
{
    "age": 10,
    "name": "MyObject",
    "isObj": true,

    generateRandomNumber : function(from:number, to:number) {
        let x = 2 * Math.random()* 10;
        return x;
    },

    printAge : function(myAge: number){
        myAge *= 10;
        //console.log(myAge);                
    }
};

console.log(myObj.generateRandomNumber(4,8));

console.log(myObj);
console.log(myObj.age);
console.log(myObj.name);
console.log(myObj.isObj);