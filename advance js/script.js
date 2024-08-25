async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(123)
        }, 1000);
    })
}
(async function main(){
    console.log("waiting...")
let a=await sleep()
console.log(a)
})()
// // let [x,y]=[4,6]
// console.log(x,y)
let [x,y,...variable]=[3,4,5,67,2]
console.log(x,y,...variable)
let obj={
    a:1,
    b:2,
    c:3
}
let{a,b}=obj
console.log(a,b)
//spread syntax
let arr=[1,4,5]
let obj2={...arr}
console.log(obj2[0])