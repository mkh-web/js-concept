//هنا سيتخد الريست ... في عملية ادخال الارقام 
//بشكل لا محدود داخل فنكشن عن طريق انك تخلي
//الفنكشن داخلها اريي 

let a=5,b=4,c=3,d=2,e=1

console.log(sum(a,b,c,5,5,7))

/*
function sum(a,b,c){
    return a+b+c
}
*/


function sum(x,...numbers){

    let total =0
    
 for(let number of numbers){
    total +=number
 }
 return total
}