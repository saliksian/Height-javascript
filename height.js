const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function Temp_Change(height){
    let heigh = 2.54 * height ;
    return heigh;
}

rl.question("Enter height in inches:  ", function(heighInInches) {
    var heighInInCentimeter = Temp_Change(heighInInches);
    console.log("Height in Centimeter: " + heighInInCentimeter);
            rl.close();
});