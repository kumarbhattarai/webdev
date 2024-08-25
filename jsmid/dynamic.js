function card(title,cname,views,old,duration,thumbnail ){
let viewnum;
if(views>1000 && views<1000000){
   viewnum=views/100000 + 'k'
}
else if(views>=1000000){
    viewnum=views/1000000 + 'm'
}
else{
    viewnum=views
}
let html= ` <div class="card">
<div class="image">
<img src="${thumbnail}" alt="couldn't load image">
     <div class="capsule"> ${duration}</div> 
        </div>
    <div class="heading">
        <h2>${title}</h1>
            <p>${cname} . ${viewnum} views . ${old} months ago</p>
            </div>
                     </div>`  
    document.querySelector(".container").innerHTML += html
}
    card("Introduction to NodeJS | sigma web development course - Tutorial #2","Code with harry",50000,2,"15:45","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q")
  