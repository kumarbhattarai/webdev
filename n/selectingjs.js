// let cont= document.getElementsByClassName("box")
// console.log(cont)
// cont[2].style.backgroundColor="red"
// document.getElementById("specific").style.backgroundColor="red"
// document.querySelector(".box").style.backgroundColor="green"
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green"
})