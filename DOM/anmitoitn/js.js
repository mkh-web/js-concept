const btn = document.getElementById("btn")
const animaiton = document.getElementById("mydiv")

btn.addEventListener("click",begin)
let timerid= null

function begin(){
    /*هنا شرح ل كيف تحرك العناصر
    let degree = 0
    let x = 0 
    let y = 0
*/
    timerid = setInterval(frame,5)/*عملية التكرار

function frame(){
    if(x >= 200 || y>=200){//ف الاساس قيمتهم صفر
        clearInterval(timerid)
    } else {
        x++
        y++//واضح هنا عاد
        degree++
        animaiton.style.left = x + "px"
        animaiton.style.top = y + "px"
        animaiton.style.transform = "rotateZ("+degree+"deg)"//X+Y+Z
    }   
}*/

let scalex =1
let scaley =1

function frame(){
    if(scaley >= 3 || scaley >= 3){
        clearInterval(timerid)
    }else{
        scaley+=0.01
        scalex+=0.01
        animaiton.style.transform = "scale("+scalex+","+scaley+")"
    }
}
}