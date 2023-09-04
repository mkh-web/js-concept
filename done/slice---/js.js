//تستخدم  هذة الميزة عشان تاخذ جزي من سترنق معين 
//و توزعة الحروف حقته على متغيرات انت تحددها من فين و الى فين 

let fullname = "mohnd khalid"

let firstname
let lastname
/*
firstname = fullname.slice(0,5)
lastname = fullname.slice(5)
*/

firstname = fullname.slice(0, fullname.indexOf(" "))
lastname = fullname.slice(fullname.indexOf(" "))

document.write(firstname)
document.write(lastname)