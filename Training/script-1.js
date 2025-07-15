let input = prompt("Enter a number");
let text = "man khoshghlab hastam";
let num = parseInt(input);
if (!isNaN(num)) {
    for(let i=0; i<num; i++){
        console.log(text);
    }
}