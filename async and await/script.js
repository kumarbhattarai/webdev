function getdata(){
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
            resolve("Initializing hacking...")
        },1000)
    })
}
let val=  getdata()
val.then((v)=>{
    console.log(v)
})
