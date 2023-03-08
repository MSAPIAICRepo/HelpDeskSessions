let numbers : number[] = [21,12,43,54,45,66,17,81,91,10];//
                      // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let names : string[];

// console.log(numbers[7]);        //81
console.log(numbers);
console.log(numbers.length);        //10

console.log(numbers.push(101));   //           //[21,12,43,54,45,66,17,81,91,10,101]
console.log(numbers);
//console.log(numbers.length);    //11    

console.log(numbers.pop());       //101
console.log(numbers);
console.log(numbers.length); 


let mixType: number[] | string[] | boolean[] = ["Singleton", "true", "10"];
let mixType2: number[] | string[] | boolean[] = [true,false];
let mixType3: number[] | string[] | boolean[] = [1,2,3,4];

mixType.push("Alpha");
// mixType.push(true);
// mixType.push(10);

console.log(numbers.splice(8,1,500));
console.log(numbers.splice(8,2,500,600,700,800));

console.log(numbers);

let myslice = numbers.slice(8,11);
console.log(myslice);
console.log(numbers);

