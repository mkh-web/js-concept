let std = ["mom","dad","mohnd"]

console.log(std.length)
std.forEach(cap)
std.forEach(praint)

function cap(element,index,array){//هنا زي ما انت شايف اللغة عارفه انو في ذي الاماكن
    //فيه العنصر و الانديكس حقه و الاري كامل ف لا تقلق


    array[index] = element[0].toUpperCase() + element.substring(1)
}

function praint(element){
    console.log(element)
}