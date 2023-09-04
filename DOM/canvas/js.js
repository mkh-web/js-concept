let can = document.getElementById("can")//تخيل ذي اللوحة او الاطار
let context = can.getContext("2d")//و ذي الرسمة نفسها
/*
context.strokeStyle = "red" لون الخط
context.lineWidth = 10 حجم الخط
context.beginPath() بداية الرسم
context.moveTo(0,0) فين تبغا نقطة البداية
context.lineTo(250,250)فين تبغا يروح
context.lineTo(550,250)
context.moveTo(500,0)//تصفر نقطة البداية
context.lineTo(250,250)
context.stroke() عشان نظهر الخط بس
*/
//wt----------------------
/*مثلث
context.lineWidth = 10
context.fillStyle = "red"

context.beginPath()
context.moveTo(250,0)//
context.lineTo(0,250)//x,y
context.lineTo(500,250)//طبعا ضروري تعطيه طول و اتجاه
context.lineTo(250,350)//اذا ما كان في اتجاه معين بيرجع لنقطة البادية لحاله
context.lineTo(250,0)
context.stroke()
context.fill()

*/
//wt-------------------------------
/*مربعات
context.lineWidth = 10
context.fillStyle = "red"

context.fillRect(0,0,250,250)//كذا تعبيه
context.strokeRect(0,0,250,250)//مربع عادي له طول و عرض ب  و نقطة بداية ب اكس و واي

context.lineWidth = 10
context.fillStyle = "black"

context.fillRect(0,250,250,250)//   
context.strokeRect(0,250,250,250)

context.lineWidth = 10
context.fillStyle = "green"

context.fillRect(250,250,250,250)//   
context.strokeRect(250,250,250,250)

context.lineWidth = 10
context.fillStyle = "blue"

context.fillRect(250,0,250,250)//   
context.strokeRect(250,0,250,250)
*/
//wt-----------------------------
/*دائرة
context.beginPath()

context.arc(250,250,200 ,0.5,2 * Math.PI)
//مكان البداية x,y
//بعدين  حجم الدائرة
//بعدين قد ايش تبغا الدائرة تكون طويلة 0 يعني كاملة و كل ما تزود يقصر الطول
//اخر شي لا تعدل عليه و تتعب نفسك خليه زي ما هو


context.fillStyle = "blue"
context.fill()
context.stroke()
*/

context.font = "50px MV boli"
context.fillStyle = "grey"
context.textAlign = "center"
context.fillText("فوت",can.width / 2,can.height / 2)