// alert("This is my first javascript")
console.log("hey")
var a = 6 ;
var b = "kumar";
console.log(a + 4 )
console.log (typeof a, typeof b)
for (let i = 0; i < 50 ; i++) {
    console.log(a+i);
}
let object={
    name : "kumar",
    role : "programmer"
}
for (const key in object) {
        const element = object[key];
        console.log( key , element) 
    }
    for (const i of "kumar") {
        console.log( i)
    }

 function nam (idf){
console.log(" Hey " + idf + "  Your tshirt is nice")
 }
 nam("Kumar")

 function sum(a,b){
    console.log("The sum is" + (a+b) )
 }
 sum(3,4)
 // Arrow function
 const arro=(a)=>{
    console.log(" This is an arrow function" , a )
 }
 arro(5)