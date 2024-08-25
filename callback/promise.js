let prom1=new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a<0.5){
        reject("Random number is not supporting you")
    }
    else{
    setTimeout(() => {
        console.log("I am finished")
        resolve("Success")
    }, 3000);
}
})
// prom1.then((a)=>{
//     console.log(a)
// }).catch((e)=>{
//     console.log(e)
// })
let prom2=new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a<0.5){
        reject("Random number is not supporting you")
    }
    else{
    setTimeout(() => {
        console.log("I am finished2")
        resolve("Success2")
    }, 3000);
}
})
// let prom3=Promise.all([prom1,prom2])
// prom3.then((a)=>{
//         console.log(a)
//     }).catch((e)=>{
//         console.log(e)
//     })


//     let prom3=Promise.allSettled([prom1,prom2])
// prom3.then((a)=>{
//         console.log(a)
//     }).catch((e)=>{
//         console.log(e)
//     })


// let prom3=Promise.race([prom1,prom2])
// prom3.then((a)=>{
//         console.log(a)
//     }).catch((e)=>{
//         console.log(e)
//     })


let prom3=Promise.any([prom1,prom2])
prom3.then((a)=>{
        console.log(a)
    }).catch((e)=>{
        console.log(e)
    })