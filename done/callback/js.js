/*let total = sum(2,3)

disp(total)
dispd(total)


function sum(x , y){
    let res = x + y
    return res
}*/

//هنا نحن عرفنا الفنكشن اسمها سم  و رحلنا 3 و 2 و اسم فنكشن
//و بعدين استقبلت الفنكشن استدعاء الفنكشن الثانية
//و بعدين ناديناها من داخل الفنكشن
// حركة رهيبة مرررره 

sum(3,2,disp)

function sum(x,y,callback/*اسم الفنكشن هنا على كيفي*/ ){
    let res = x +y 
    callback(res)
    dispd(res)
}


function disp(output){
    console.log(output)
}

function dispd(output){
    document.write(output)
}



