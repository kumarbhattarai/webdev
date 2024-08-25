
// arr.forEach(element => {
  
// });

const addItem = async(item)=>{
    await randomDelay()
    let div = document.createElement("div")
    div.innerHTML=item
    document.body.append(div)
}

const randomDelay=()=>{
    return new Promise((resolve,reject)=>{
        timeout= 1 + 6*Math.random();
        setTimeout(()=>{        
            resolve("success")
        },timeout*1000)
    })
}
 async function main(){
    let t= setInterval(() => {
        last = document.body.getElementsByTagName("div");
        last=last [last.length-1]
        if(last.innerHTML.endsWith("...")){
            last.innerHTML=last.innerHTML.slice(0 ,last.innerHTML.length-3)
        }
        else{
            last.innerHTML=last.innerHTML + "."
        }
    }, 200);
let arr= [
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "cleaning up"]
for (const item of arr) {
    await addItem(item)
}
await randomDelay()
clearInterval(t)
 document.body.innerHTML="success"

}
main()