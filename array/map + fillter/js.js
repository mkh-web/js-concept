//map تستخدم عشان تقوم بعملية معينة لكل عنصر من عناصر الاري
//و في نفس الوقت العملية ذي بتثير على الاري الجديد

let num = [1,2,3,4,5]

let sq = num.map(square)



sq.forEach(print)

function square(element){
    return Math.pow(element, 2)
}



function print(element){
    console.log(element)
}

//wt--------------
//نفس موضوع الماب بس هنا لازم تعدي الشرط حق الفنكشن
//و هناك يتم تغييرر على العصن
let age =[10,20,30,40]
let adults = age.filter(checkage)

adults.forEach(print)

function checkage(element){
    return element>=18
}