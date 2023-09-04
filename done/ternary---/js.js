//? يشتغل زي الششرط بس مبسط
/* تقدر تسوي كذا او كذاك
function checkage(age){
    if(age >= 18){
        return true
    }else{
        return false
    }
}
*/

let win = true

function checkage(age , win){
    return age >= 50 ? true/*في حال تحقق الشرط */  :  /*في حال ما تحقق*/ false
}

function check(win){
    win ? console.log("y w") : console.log("y L")
}



let ad = checkage(21, true)
check(win)
console.log(ad)
