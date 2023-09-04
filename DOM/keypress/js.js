
const div = document.getElementById("mydiv")

window.addEventListener("keydown",Event => console.log(Event.key))
window.addEventListener("keydown",move)//keyup
//الفنكشن هنا تستقبل متغير 
//ليش؟؟
//لانو الامر يقول كي داون و الي يعني انو في حاجة لازم الفنكشن تستلمها 
let x=0
let y=0

function move(event){
    switch (event.key){
    case "ArrowDown":
    y+=5
    div.style.top = y + "px"
    break

    case "ArrowUp":
    y-=5
    div.style.top = y + "px"
    break

    case "ArrowRight":
    x+=5
    div.style.left = x + "px"
    break

    case "ArrowLeft":
    x-=5
    div.style.left = x + "px"
    break

    default:
    console.log("press somthing")
    
}
}