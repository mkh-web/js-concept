let fruit =     ["apple","banana","malwon"]
,meat =         ["cow","fish","chinken"]
,veg =          ["pootatos","carrots","tomats"]

let array = [fruit,veg,meat]
array[2][2] = "egss"


for(let i of array){//I يالي صار هنا اني خليت ال
    //يعبر على كل الاري
console.log(...i)//هنا فككنا الاري عشان الشكل بس 
    for(let food of i){
        console.log(food)
    }
} 

/*الطريقة التقليدية
for(let i =0 ;i<array.length;i++){
    for(let j =0 ;j<array.length;j++){
        console.log(array[i][j])
    }
}*/

