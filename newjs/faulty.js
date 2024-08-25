var a=parseInt(prompt("Enter the first number"))
var b= parseInt(prompt("Enter the second number"))
var d= parseInt(prompt("Enter 1 for addition, 2 for subtraction, 3 for division and 4 for multiplication"))
var c= Math.random()
var e
if(c<0.1){
    if(d==1){
        d=2;
    }
    else if(d==2){
        d=3
    } 
    else if(d==3){
        d=4
    }
    else{
        d=1
    }
}
if(d==1){
    e=a+b
}
else if (d==2){
    e=a-b
}
else if(d==3){
    e=a/b
}
else{
    e=a*b
}
console.log("The ans is " +e)