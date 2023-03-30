//// anonymous
let teacher : {name: string, exp: number} = {
    name: "Zeeshan",
    exp: 10
}

let person = {
    name: "Zeeshan",    //string
    exp: 10,            //number
    age: 56
}
teacher = person;
console.log(teacher);

// Aliased Object Type
type Student = {
    name: string,
    age?: number
}

let student: Student = {
    name: "Hira",
    age: 30
}

let std2 : Student = {
    name : "Asif",
    age : 10
}
std2.name="Khalid";
std2.age=50;

type Animal = {
    sound: string,
    gender: number
}

let Dog: Animal = {
    sound : "Bark",
    gender : 1
}