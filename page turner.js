var a=document.querySelector(".six")
var b=document.querySelector(".seven")
var c=document.getElementById("five")
c.addEventListener("click",function(){
    a.style.display="block"; 
    b.style.display="block"; 
})
var d=document.getElementById("cancel")
d.addEventListener("click",function(event){
    event.preventDefault()
    a.style.display="none"; 
    b.style.display="none"; 
})
var e=document.querySelector(".two");
var f=document.getElementById("add");
var g=document.getElementById("book-title");
var h=document.getElementById("book-author");
var i=document.getElementById("book-description");
f.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div")
    div.setAttribute("class","three")
    div.innerHTML=`<h2>${g.value}</h2>
          <h4>${h.value}</h4>
          <p>${i.value}
          </p>
        <button class="ten" onclick="deletebook(event)">Delete</button></div>`
    e.append(div)
    a.style.display="none"; 
    b.style.display="none"; })
function deletebook(event){
    event.target.parentElement.remove()
}