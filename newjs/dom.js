document.body.style.background="green"
// Failed to load resource: the server responded with a status of 404 (Not Found)Understand this error
// document.body
/* 
<body style=​"background:​ green;​">​…​</body>​
document.body
<body style=​"background:​ green;​">​…​</body>​<div class=​"container">​<div class=​"box">​box1​</div>​<div class=​"box">​box2​</div>​<div class=​"box">​box3​</div>​<div class=​"box">​box4​</div>​</div>​<script src=​"dom.js">​</script>​</body>​
document.body.classList
DOMTokenList [value: '']length: 0value: ""[[Prototype]]: DOMTokenList
docume
VM289:1 Uncaught ReferenceError: docume is not defined
    at <anonymous>:1:1
(anonymous) @ VM289:1Understand this error
document.body.childNodes
NodeList(5) [text, div.container, text, script, text]0: textassignedSlot: nullbaseURI: "http://192.168.18.5:3000/newjs/dom.html"childNodes: NodeList []data: "\n    "firstChild: nullisConnected: truelastChild: nulllength: 5nextElementSibling: div.containernextSibling: div.containernodeName: "#text"nodeType: 3nodeValue: "\n    "ownerDocument: documentparentElement: bodyparentNode: bodypreviousElementSibling: nullpreviousSibling: nulltextContent: "\n    "wholeText: "\n    "[[Prototype]]: Text1: div.container2: text3: script4: textlength: 5[[Prototype]]: NodeList
document.body.firstChild
#text
document.body.childNodes[1]
<div class=​"container">​<div class=​"box">​box1​</div>​<div class=​"box">​box2​</div>​<div class=​"box">​box3​</div>​<div class=​"box">​box4​</div>​</div>​
document.body.childNodes[1].childNodes
NodeList(9) [text, div.box, text, div.box, text, div.box, text, div.box, text]
let cont=document.body.childNodes
undefined
cont
NodeList(5) [text, div.container, text, script, text]
cont.firstChild
undefined
con
VM1624:1 Uncaught ReferenceError: con is not defined
    at <anonymous>:1:1
(anonymous) @ VM1624:1Understand this error
cont
NodeList(5) [text, div.container, text, script, text]
cont.firstChild
undefined
let cont=document.body.childNodes[1]
undefined
cont
<div class=​"container">​…​</div>​
cont.firstChild
#text
document.body.childNodes
NodeList(5) [text, div.container, text, script, text]
cont
<div class=​"container">​…​</div>​
cont.firstChild
#text
cont.childNodes[2]
#text
cont.childNodes[1]
<div class=​"box">​box1​</div>​
cont.lastChild
#text
cont.firstElementChild
<div class=​"box">​box1​</div>​
cont.ELEMENT_NODE[1]
undefined
cont.childElementCount[1]
undefined
cont.lastElementChild.style.background="red"
'red'
cont.element.childNodes
VM3170:1 Uncaught TypeError: Cannot read properties of undefined (reading 'childNodes')
    at <anonymous>:1:14
(anonymous) @ VM3170:1Understand this error
document.body.childNodes[1].firstChild
#text
document.body.childNodes[1].firstElementChildChild
undefined
document.body.childNodes[1].firstElementChild
<div class=​"box">​box1​</div>​
cont.childElementCount
4
cont.element.childNodes[2]
VM3888:1 Uncaught TypeError: Cannot read properties of undefined (reading 'childNodes')
    at <anonymous>:1:14
(anonymous) @ VM3888:1Understand this error
cont.element.childNodes
VM3968:1 Uncaught TypeError: Cannot read properties of undefined (reading 'childNodes')
    at <anonymous>:1:14
(anonymous) @ VM3968:1Understand this error
cont.firstElementChild.parentNode
<div class=​"container">​…​</div>​
cont.children
HTMLCollection(4) [div.box, div.box, div.box, div.box]
cont
<div class=​"container">​…​</div>​
cont.children[1].nextSibling
#text
*/
document.querySelector(".box").hidden=true

// 'Hey I am kB'
// document.querySelector(".box").innerHTML
// 'Hey I am kB'
// document.querySelector(".box").hasAttribute("style")
// false
// document.querySelector(".box")getAttribute("style")
// VM2144:1 Uncaught SyntaxError: Unexpected identifier 'getAttribute'Understand this error
// document.querySelector(".box").setAttribute("style, display:flex")
// VM2415:1 Uncaught TypeError: Failed to execute 'setAttribute' on 'Element': 2 arguments required, but only 1 present.
//     at <anonymous>:1:32
// (anonymous) @ VM2415:1Understand this error
// document.querySelector(".box").setAttribute("style","display:flex")
// undefined
// document.querySelector(".box").setAttribute("style","display:inline")
// undefined
// document.body.style.background
// 'green'
// document.body.hasAttribute("style)
// VM3070:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
// document.body.style
// CSSStyleDeclaration {0: 'background-image', 1: 'background-position-x', 2: 'background-position-y', 3: 'background-size', 4: 'background-repeat', 5: 'background-attachment', 6: 'background-origin', 7: 'background-clip', 8: 'background-color', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
// document.body.hasAttribute("style")
// true
// document.body.getAttribute.("style")
// VM3438:1 Uncaught SyntaxError: Unexpected token '('Understand this error
// document.body.getAttribute("style")
// 'background: green;'
// document.body.setAttribute("style","background: aqua")
// undefined
// document.querySelector(".container").attributes
// NamedNodeMap {0: class, class: class, length: 1}
let kb=document.createElement("div")
kb.innerHTML="Hey I am KB"
kb.setAttribute("class","created")
document.querySelector(".container").append(kb);
// document.querySelector(".container").prepend(kb);
// document.querySelector(".container").replaceWith(kb);
// document.querySelector(".container").before/after(kb);
let cont=document.querySelector(".container")
// cont.insertAdjacentHTML("afterend","Hey I am kB")
// cont.insertAdjacentHTML("beforeend","Hey I am kB")
// cont.insertAdjacentHTML("afterbegin","Hey I am kB")
cont.insertAdjacentHTML("beforebegin","Hey I am kB")
document.querySelector(".container").classList.add("JsClass")
document.querySelector(".container").classList.remove("bg")
