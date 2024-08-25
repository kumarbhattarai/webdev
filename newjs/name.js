function adj(){
    let a="crazy"
    let b="Amazing"
    let c="Fire"
    let d= Math.floor(Math.random()*3)
    if(d==0){
        return a
    }
    else if(d==1){
        return b
    }
    else {
        return c
    }
}
function shop(){
    let a="Engine"
    let b="Foods"
    let c="Garments"
    let d= Math.floor(Math.random()*3)
    if(d==0){
        return a
    }
    else if(d==1){
        return b
    }
    else {
        return c
    }
}

function word(){
    let a="Bros"
    let b="Limited"
    let c="Hub"
    let d= Math.floor(Math.random()*3)
    if(d==0){
        return a
    }
    else if(d==1){
        return b
    }
    else {
        return c
    }
}
console.log("The result is " + adj() + " " + shop() + " " + word())
