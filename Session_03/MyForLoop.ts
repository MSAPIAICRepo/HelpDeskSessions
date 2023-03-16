let countries = ["Afghanistan", "Pakistan", "Iran"];

let x=0;
/*
for (; x<countries.length ; x++) {    //3      
    console.log(countries[x]);
    for(let y=0;y<countries[x].length;y++){
        if(countries[x].charAt(y)=="a" || countries[x].charAt(y) =="A")
            console.log("*");
        else
            console.log(countries[x].charAt(y));
    }
}

console.log("Pakistan".toLowerCase());
console.log("Pakistan".toUpperCase());
*/

for (x=0; x<countries.length ; x++) {
    // if(countries[x].length>5){
    //     console.log(`${countries[x]} Length=${countries[x].length} -> Check`);        
    // }else{
    //     console.log(`${countries[x]} Length=${countries[x].length} -> Un-Check`);        
    // }
    if(countries.includes("Pakistan")){
        console.log("Pakistan Zindabad");        
    }
}

// for(x=1;x<5;x++){
//     console.log(x);
// }

// x=10;
// for(;x>0;x--){
//     console.log(x);    
// }

// for(;true;x++){

// }
//console.log("Loop End");