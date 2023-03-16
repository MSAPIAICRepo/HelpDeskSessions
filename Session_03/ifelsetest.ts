
let rNo = 0
for (let x = 0; x < 5; x++) {
    rNo = Math.random() * 10;
    if (rNo > 5) {
        console.log("Number is greater than 5 " + rNo);
    } else {
        console.log("Number is lesser than 5 " + rNo);
    }
}