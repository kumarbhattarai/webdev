let a=prompt("Enter the first number")
let b= prompt("Enter the second number")
if(isNaN(a)||isNaN(b)){
    console.log ("Your input is not a number")
}
let sum=parseInt(a)+parseInt(b)
console.log("The sum is ", sum)
function main(){
let x=2;
try{
    console.log("The sum is ",sum*x)
}
catch(error){
    console.log("variable undeclared")
    // alert(error.name)
    // alert(error.message)
    // alert(error.stack)

}
finally{
    console.log("I can execute even after return statement")
}
}
let c=main()