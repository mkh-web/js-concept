//الشي الرهيب في الايفنت ليستر هو
//تقدر تضيف الايفنت و الفنكشن الخاصة به ف سطر واحد

const innerdiv = document.getElementById("innerdiv")
const outerdiv =  document.getElementById("outerdiv")

innerdiv.addEventListener("mouseover",changecolor)
//innerdiv.addEventListener("mouseout",changecolor1)
innerdiv.addEventListener("click",changecolor2)
outerdiv.addEventListener("click",changecolor2,true)
//كتبت ترو كاني اقول اول شي خذ هذا بعدين خذ ذاك

function changecolor(){
    innerdiv.style.backgroundColor ="red"
}
function changecolor1(){
    innerdiv.style.backgroundColor ="lightgreen"
}

function changecolor2(){
    this.style.backgroundColor ="blue"
//استخدم ذس في حال اكثر من عنصر اخذ الفنكشن المعينة هذة و عشان تريح راسك

}