let a = document.createElement("div");
a.className="dive";
let b =document.createElement("ul");

let c=document.createElement("li");
c.innerHTML="hello world";
b.appendChild(c)
a.appendChild(b);

// document.body.appendChild(a);
console.log(a)
