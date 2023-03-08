// Ticketing system
let country = ["Pakistan", "Turkey", "Canada"];
// Number() function is used to convert the string to number
let age = Math.round(Math.random()*90);
let domicile = ["Sindh","Punjab","KPK","Balouchistan"];
//let index = Math.random()*10;
// Domicile = Sindh

if (country[0] === "Pakistan") {
    if (age >= 18) {
        console.log("Here is your ticket")
    } else {
        console.error("Age restriction")
    }
} else if (country[0]== "Turkey"){
    if (age >=30){

    }else{

    }
    //....
} else {
    console.log("Invalid country")
}