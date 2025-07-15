let firstNum = prompt("Enter first number:");
let secondNum = prompt("Enter second number:");
let thirdNum = prompt("Enter third number:");

 if (!isNaN(parseInt(firstNum)) && !isNaN(parseInt(secondNum)) && !isNaN(parseInt(thirdNum))
 && firstNum !== 0 && secondNum !== 0 && thirdNum !== 0){
     if(parseInt(firstNum) + parseInt(secondNum) + parseInt(thirdNum) === 180){
         console.log("Yes!")
     }
     else if ( (parseInt(firstNum) || parseInt(secondNum) || parseInt(thirdNum)) < 0 ){
     console.log("Enter number more than 0");}
     else{console.log("No!");}
}

else{console.log("Failed! (Note: Enter numbers only)");}