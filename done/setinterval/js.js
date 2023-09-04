let count = 0
let max = 10
const timer = setInterval(countup,1000)

function countup(){
        count++
        console.log(count)
        if(count >=max){
            clearInterval(timer)
        }
}



let i = 0
const a = document.getElementById("timer")

const sectimer = setInterval(() => { 
    i++
    a.innerHTML =`timer ${i}`
    if(i==60){
        clearInterval(sectimer)
    }
},1000) 

//فنكشن تايمر 



