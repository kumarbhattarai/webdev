let obj={
    a: "kumar",
    b: "bhattarai",
    c:1
};
console.log(obj)
class animal{
    constructor(name){
        this.name=name
        console.log(name + " Class created")
    }
    eats(){
        console.log("Eating");

    }
    jumps(){
        console.log("Jumping");
    }
}
class Lion extends animal{
    constructor(name){
        super(name)  //have  to call super constructor first
    // this.name=name
    console.log(name + " class created")
    }
    eats(){
        super.eats()
        console.log("This is after method overriding")
    }
}
let a=new animal("RABBIT")
console.log(a)
let l=new Lion("Lion")

console.log(l)
