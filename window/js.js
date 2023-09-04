/*
console.dir(window)
console.log(window.innerHeight)
console.log(window.innerHeight)

console.log(window.outerHeight)
console.log(window.outerWidth)*/


console.log(window.scrollX)
let a= window.scrollY
console.log(a)


//window.location.href = "www.google.com"
console.log(window.location.hostname)
console.log(window.location.pathname)
console.log(window.location.href)

//wt----------------

const btn = document.querySelector("#btn")

btn.addEventListener("click", ()=> window.open("www.google.com"))
//close 
//print
let age =window.prompt("enter your agen")
if(age<18){
window.alert("you must be older")
window.close()
}
window.confirm("press okay")