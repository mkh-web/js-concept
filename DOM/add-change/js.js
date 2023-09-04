const nametag = document.createElement("h1")

//nametag.innerHTML = window.prompt("enter yr namesda") الطريقة ذي خطيرة لانه ممكن تخليهم يرسلوا عليك فيروسات و هكرز
//nametag.textContent = window.prompt("enter yr namesda")//هذة الطريقة اكثر امان
document.body.append(nametag)

const mylist = document.querySelector("#fruit")//اول شي تاخذة العنصر الاب عشان تحجزه
const list = document.createElement("li") //بعدين تنشا عنصر يحتوي على تاق الاتش تي ام ال

//بعدين تستخدم التكيستك كونتيت لانها اكثر امان و تعطيها قيمه
list.textContent = "gg"

//بعدين تستخدم الابند و تضيف الي تبغاه سوء كان متغير يحتوي على نص او نص 
mylist.append(list)//اضافة ف النهاية
mylist.prepend(list)//اضافة ف البداية


//طريقة للاضافة من الوسط 
mylist.insertBefore(list,mylist.getElementsByTagName("li")[2])

mylist.style.display = "none"
