let a="kumar"
let b= "sigmaweb"
console.log(`My name is ${a} and i am currently learning ${b} course`)
let a1=[1,2,3,4,5]
// let a2=[2,5,6]
// let a3=[5,3,6]
// console.log(a1.concat(a2,a3));
// console.log(a3.sort());
// console.log(a1.splice(1,1,5,6))
// console.log(a1)
for (let i = 0; i < a.length; i++) {
    // const element = a1[i];
    console.log(a1[i])
    
}
a1.forEach((value,index,a1) => {
    console.log(value,index,a1)
});
let obj={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
 
    console.log(key, element) 
}
}
const newArr=(e)=> {
    if(e>2)
    {
        return true
    }
    return false
}
console.log(a1.filter(newArr))
