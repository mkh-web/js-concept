
//you can use let,var or const //check - make sure to know the diff btw let and var
//the data type of the variable depands on how you deal with it (string , number , boolen)
let a=20
let y = "mohnd"
let z = true

//wt-------------------------------

console.log(a-=x)
console.log("hi" , y) //it's used to make sure your code is run corrructlyy
window.alert("hi") // it clear


//wt-------------------------------

//check how to take info from the user
/*1.eazy way*/
let uname = window.prompt("what is your name?")
console.log(uname);

/*2.the hard way*/
let username;

    document.getElementById("mybutton").onclick = function(){ //to make aciton when 
        //click the button
         username = document.getElementById("mytext").value; //to get the data
         document.getElementById("mylabel").innerHTML = "heelo " + username //innerhtml 
         //is used to change an html element
        console.log(username);
    }

//wt-------------------------------
//conversiton
let x =5

x = Number(x)
x = String(x)
x = Boolean("")//empty false or wirte somemthing and it will be true

console.log(x, typeof x)

//wt-------------------------------

//const exmple
const PI = 3.14
let radius
let cir

//radius = window.prompt("enter the radius")
radius = Number(radius)

cir = 2*PI*radius

console.log("the cir is" , cir)

//wt-------------------------------
//check ماث هو عبارة عن اوبجكت داخله مجموعة من الفنكشنز الي لها علاقة ب الرياضيات و هذة بعضهل بس


let s = 3.14
let b = 7
let h = 20
let max,min

s = Math.round(s)// يقرب لك الرقم
s = Math.floor(s)// ما يجبر الرقم حتى لو كان 99
s = Math.ceil(s) //دايم يجبر الرقم 
s = Math.pow(s , 2)// زي مفهوم المضروب ف نفسه كم مره
s = Math.sqrt(s) //مقسوم على اثنين 
s = Math.abs(s) //مسافة من ال0 الى الرقم الفلاني


max = Math.max(s,b,h)// واضحين ذولي الاثنين
min = Math.min(s,b,h)
s = Math.PI //يعطيك سطر الارقام كامل


console.log(s)
//wt-------------------------------
//conversiton
let A1,B1,C1

A1= Number(window.prompt("enter side a"))
B1= Number(window.prompt("enter side B"))

//C1 =  Math.pow(A1 , 2) + Math.pow(B1 , 2)
C1 = Math.sqrt( Math.pow(A1 , 2) + Math.pow(B1 , 2))
console.log(C1)