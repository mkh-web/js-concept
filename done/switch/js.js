let grade = 60


//لما ابغا تستخدم جمل شرطية داخل السيوتش يفضل انك تسوي الموضوع 
//زي كذا

//لكن لما تبغا تقارنها ب جملية معينة براحتك

//نستخدم السيوتش لما نبغا نسوي شروط كثيرة  منها واضحه و افضل

switch(true){
case grade >= 95:
console.log("you did great")
break
case  grade >= 80:
console.log("you did ok")
break
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