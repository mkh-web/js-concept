//نفس موضو الماب و الفلتر بس هنا يعطيك قيمة وحدة بس 
//و الي تكون النهائية

let prices = [5,10,20,30,40]
let total = prices.reduce(check)

console.log(`the total is ${total}`)


function check(total , element){
    console.log(element)
    return total += element
}