//الكوكي عبارة عن مملف نسويه عشان نحفظ ملعومات معينة عن الزائرين
//طبعا لازم تحدد  تاريخ الانتهاء حق الكوكي و ايش المعلومات الي يحفظها
console.log(navigator.cookieEnabled)


//document.cookie = "firstname = mohnd; expires = Sun, 1 January 2030 12:00:00 UTC; path=/"
//document.cookie = "lasttname = mohndxs; expires = Sun, 1 January 2030 12:00:00 UTC; path=/"


//console.log(date.getTime())تجيب لك الوقت بالثواني


function setcookie(name,value,daysTolive){
    const date =new Date()//اوبجكت من كلاس ديت
    date.setTime(date.getTime() + daysTolive *24*60*60*100)//ساعة*دقيقة*ثانية*اجزاء من الثانية
    let expires = "expires=" + date.toUTCString()
    
    document.cookie = `${name} = ${value}; ${expires}; path=/`//القيم كلها مخزنة في المتغيرات
}

function deletecookie(name){//طريقة لحذفة الكوكي هو انك ما تعطيه تاريخ اكسباير
    setcookie(name,null,null)
}


/*اضافة
setcookie("email","gmail.com",360)
setcookie("firstname","gg",360)
setcookie("last","gm",360)
*/

/*حذف
deletecookie("email")
deletecookie("firstname")
deletecookie("last")
*/

function getcookie(name){//وظيفة ذي النفكشن انو تطلع لك بس المعلومة المهم بدون اسمها
    let res
    const cDecoded = decodeURIComponent(document.cookie)
    const carray = cDecoded.split("; ")
    
    carray.forEach(element => {//مسؤولة على شكل الطباعة الاخير
        if(element.indexOf(name) ==0 ){
            res = element.substring(name.length +1)
        }
        
        
    })
    return res
}

console.log(getcookie("email"))

//wt----------------
const ftext = document.querySelector("#first-text")
const stext = document.querySelector("#sec-text")
const submit = document.querySelector("#submitbtn")
const cookiebtn = document.querySelector("#cookiesbtn")

submit.addEventListener("click",()=>{
    setcookie("firstname",ftext.value,365)
    setcookie("lastname",stext.value,365)
})

cookiebtn.addEventListener("click",()=>{
    ftext.value = getcookie("firstname")
    stext.value = getcookie("lastname")
})





