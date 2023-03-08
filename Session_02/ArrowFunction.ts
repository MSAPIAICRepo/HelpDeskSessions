function calculateAverage(num1: number, num2:number): number{
    return (num1+num2)/2;
}

let avg = calculateAverage(20,50);   // (20+50)/2 = 35
console.log(avg);

//() => {}

function calculateAverage2() {
    console.log("Calculating Average");    
}

let avg2 = (num1: number, num2:number) => {
    let myAvg = (num1+num2)/2;
    return myAvg;
}

let avg3 = calculateAverage2();
console.log(avg3);

let zzz = (num1: number, num2:number) => (num1+num2)/2;


let f3 = (age:number, name:string) => {
    return `Mr. ${name}, Your age is ${age}`;
}
console.log(f3(100, "Sibtain"));

function optParams(param1:number, param2:string="Gamma", param3:number=50){
    //console.log(`${param1}, ${param2}, ${param3}`);    
    return `${param1}, ${param2}, ${param3}`;
}

let xyz = optParams(10,"Alfa",20);
console.log(xyz);

let xyz2 = optParams(10,"Beta");
console.log(xyz2);

let xyz3 = optParams(10);   //
console.log(xyz3);

function optParams2(num1?:number, num2?:number){
    console.log(num1);
    console.log(num2);
}
//optParams2();
//optParams2(10);
optParams2(10,20);
