let username = "bro mohnd"
let phonenumber = "123-456-789"


document.writeln(username.length)
document.writeln(username.charAt(0))
document.writeln(username.indexOf("m"))
document.writeln(username.lastIndexOf("d"))

username = username.trim()//يتخصل من المسافة قبل و بعد 
username = username.toUpperCase()//يخليها حروف كبيرة
username = username.toLocaleLowerCase()//يخليها حروف صغيرة

phonenumber = phonenumber.replaceAll("-","*")//في المربع الاول تحط الحرف الي تبغا تستبدله
//و في الثاني تحط تبغا تستبدله ب ايش

document.writeln(phonenumber)
document.writeln(username)
