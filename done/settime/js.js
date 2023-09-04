//باختصار عبارة عن فنكشن وظيفتها هي انو تطلع لك فنكشن بعد عدد معسن من الثواني 
//طبعا ما تاثر على باقي البرنامج راح تمشي معاه



let a = setTimeout(alert1,3000)
let b = setTimeout(alert2,6000)
let c = setTimeout(alert3,9000)

document.getElementById("btn").onclick = ()=> {
    clearTimeout(a)    
    clearTimeout(b)    
    clearTimeout(c)    
    alert("thank")
}

let time = "cryptocunrcy"
let price = 420

function alert1(time , price){
    alert(`the itme is ${time} and the price is ${price}`)
}
function alert2(){
    alert(" ببلاششش")
}
function alert3(){
   alert("الكروس الللحق")
}



/*
let i =0
const a = document.getElementById("timer")

for(let i =0 ; i<60 ;i++){
setTimeout(clolk,5000)
}

function clolk(){
    if(i<60){
        i++
        a.innerHTML += i
    }
}//محاولة جيدة عشان تسوي تايمر
*/