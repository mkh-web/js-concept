let date = new Date()
//let date = new Date(100000000000000)
//let date = new Date(y,m,d,h,m,ms)
//let date = new Date("novmber 1, 2023 0:00:00")


let a = date.getFullYear()
let Q = date.getMonth()
let m = date.getDate()
let s = date.getSeconds()
let mm = date.getMinutes()
let h = date.getHours()
let w = date.getDay()//ساعة و دقايق و يوم و اسبوع و انت ماشي 

console.log(`${a}/${Q}/${w}`)//تقدر تسوي كذا او بنفكشن و برضو تقدر تسوي المووضع ب الساعات
console.log(`${h}:${mm}:${s}`,h>12 ? "am" : "pm")
console.log(w)
console.log(s)

//hour = (hour % 12) || 12 هذا الكود يحول لك البتاع من 12 الى 24 او العكس



date.setFullYear(2066)
date.setDate(12)
date.setSeconds(60)
date.setHours(24)
date.setMinutes(50)

date = date.toLocaleString()
console.log(date)
