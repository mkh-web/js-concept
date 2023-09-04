let wdith,height,area


wdith = window.prompt("enter width")
height = window.prompt("enter height")

area = start(wdith , height)

console.log(area)

function start(width , height){
let res = wdith * height

return res //نستخدم ريترن عشان نرجع الاقيمة المعينة
//return wdith * height//او كذا
}

