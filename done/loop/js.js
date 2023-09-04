//باختصار يسوي عملية بشكل متكرر حتى يخلص الشرط
let username = ""

while(username == "" || username == null){//الي داخل اللوب لازم يكون قيمته تساوي ترو عشان يستمر في العمل
    username = window.prompt("enter your name ")
}

console.log("hello" , username)

/*اللوب الانهائية
while( 1==1 ){
    console.log("help")
}*/

//wt---------------------
let uname = ""

do{//هنا الي يصير باختصار انو اول شي يقولك نفذ العملية بعدين روح شيك على الشرط حتى لو كان خطاء
    uname = window.prompt("enter your name 2")
}
while(uname == "" || uname == null)

console.log("hello" , uname)

//wt---------------------

//تستخدم عشان تكرر كود معين لعدد محدد من المرات
for(let i =0 ;i<10 ; i++){
    if(i == 5){
        break//يوقف تمام في مكان محدد
    }
    if(i == 1){
        continue//يسوي سكيب لجزء معين من الكود
    }
    console.log(i)
}


//wt---------------------
//الفرق بين ال فور و الوايل ---الوايل تستخدم حتى يتحقق شرط معين --الفور تكون زي العداد في الغالب