async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("404")
        }, 3000);
    })
}
async function main(){
console.log('loading modules...')
console.log('loading data...');
let data= await getData()
// data.then((e)=>{
//     console.log(data);
//     console.log('finished fetching data')
// })
    console.log(data);
    console.log('finished fetching data')
}
main()


