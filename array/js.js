//TODO هذا كل الاري


let fruit = ["apple","ornge","banana"]

//fruit[1] = "nnnnnnnnnnnno"
fruit.push("abneaa")//يضيف من فوق 
fruit.pop()//يحذف من فوق

//wt--------------------------------------------
fruit.unshift("XD")//يضيف من البداية 
fruit.shift("XD")//يحذف من البداية 

let length = fruit.length



console.log(fruit)
console.log(fruit.indexOf("banana"))
console.log(length)



//check كان ذا مقدمه ذحين شي بناخذ الطباعة 
console.log("---------------------")
let array = [5,4,3,2,1]

for(let i=0;i<array.length;i++){
console.log(array[i])
}


console.log("---------------------")
for(let i=array.length -1;i>=0;i--){//هنا بصورة عكسي 
    // طبعا السالب هنا بسبب انو اللينقث عبارة عن 5 و الاندكس لو تذكر دايم يكون اقل من عدد الارقام منطقيا
    //الاعداد عددها 5
    // الاندكيس يساوي 4
console.log(array[i])
}


console.log("------------طريقة ثانية---------")
for(let i of array){//هنا نخلي المتغير ذا يمر على كل العناصر حق الاري
    //طبعا العيبة في ذا الطريقة انو ما في شي يوقفه لين ما يمر على كل شي 
console.log(i)
}


console.log("------------طريقة لتترتيب الاشياء ---------")
fruit = fruit.sort().reverse()
for(let i of fruit){//هنا نخلي المتغير ذا يمر على كل العناصر حق الاري
    //طبعا العيبة في ذا الطريقة انو ما في شي يوقفه لين ما يمر على كل شي 
console.log(i)
}

