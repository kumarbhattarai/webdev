let boxes=document.querySelector(".container").children
console.log(boxes)
function randcolor(){
    let v1=Math.ceil(Math.random()*255)
    let v2=Math.ceil(Math.random()*255)
    let v3=Math.ceil(Math.random()*255)
    return `rgb(${v1},${v2},${v3})`
}

Array.from(boxes).forEach(e=>{
e.style.background=randcolor()
})