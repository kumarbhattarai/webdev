const fn=()=>{
    console.log("Hello")
}
const callback=(arg,fn)=>{
    console.log(arg)
    fn()
}
const loadscript=(src,callback) => {
  let sc=document.createElement("script")
sc.src=src
sc.onload=callback("kumar",fn)
document.head.append(sc)
}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
