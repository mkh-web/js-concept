let num= 500500400

let A=1
//num=num.toLocaleString("الببلد",{style:"currency",currency:"نوع العملة"})
num=num.toLocaleString("en-us",{style:"currency",currency:"USD"})

//نسبة مئوية
A=A.toLocaleString(undefined,{style:"percent"})



//في خيارات كثير طبعا بس و كلها ف النت
//حرارة و حجم و كيلو و طول و كثير 

console.log(num)
console.log(A)