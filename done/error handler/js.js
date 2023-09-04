
try{
let a = Number(window.prompt("enter a number"))

if(isNaN(a)) throw "that wasnt a number"//في حال كان فاضي بيسوي ثرو للرسالة في الكونسل
if(a == "") throw "that was empty"

console.log(`the number is ${a}`)

consolqe.log(`the number is ${a}`)

}
catch(error){//هذا عشان يوريك في الخطاء بالضبط
    //مع العلم لغة الجافا سكربت ما توريك فين الاخطاء في الساينتكس
    //بس تنحل ذي المشكلة مع التايب سكربت
    console.error(error)
    console.log("صحح")
    console.error("ss")
}
finally{
    console.log("هذا بيشتغل دائم")
    //يستخدم في الغالب من اجل عملية التنظيف و كذا 
}

