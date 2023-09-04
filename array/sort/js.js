let grade = [10,20,30,60,40,50]


grade = grade.sort(asdesending)
grade.forEach(print)


function desending ( x,y){//هنا يا طويل العمر ما ندري ليش سوا كذا
    //مع العلم تقدر تستخد الغنشكن الي اسمها سورت و تخلص بس 
    //و تقدر تسوي ريفرس لو تبغا اسندنق
    //بس يلا زيادة خير
    return y-x
}

function asdesending ( x,y){
    return x - y
}

function print(element){
    console.log(element)
}