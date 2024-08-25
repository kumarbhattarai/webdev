let button=document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    let cont=document.getElementsByClassName("box")
    cont[0].style.background="blue"
})
button.addEventListener("click",()=>{
  document.querySelector(".box").innerHTML="I was edited after click. This is to motivate you to study until you satisfy yourself even if it costs"
document.body.style.background="aqua"
})
button.addEventListener("mousedown",()=>{
  let cont=document.getElementsByClassName("box")
   cont[0].innerHTML="Add is loading"
})
button.addEventListener("contextmenu",()=>{
    let cont=document.getElementsByClassName("box")
     cont[0].innerHTML="you're directed to menu"
  })
  button.addEventListener("keydown",(e)=>{
    console.log(e)
  })
// button.addEventListener("click",()=>{
// alert("I was clicked")
 