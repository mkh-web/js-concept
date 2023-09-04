let grade = 80
uname = "mohndss"

//تقدري تسوي اكثر من شرط براحتك 

switch(true){
case grade >= 95 && uname == "mohnd":
console.log("you did great")
//and واضح موضوع الترو و فولس
// true + true = true 
// true + false = false 
// false + false = false 
break
case  grade >= 80 || uname == "mohnd":
console.log("you did ok")
break
    // true + true = true 
    // true + false = true 
    // false + false = false 

case  grade >= 70:
console.log("you did somewhat good")
break
case  grade >= 60:
console.log("you did pass")
break
case  grade >= 40:
console.log("you failed")
break

default:
    console.log("you didn't enter the grade")

}