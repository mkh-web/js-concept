const store = new Map([
    ["t-shrit" , 20],
    ["socks" , 10],
    ["shrit" , 50],
    ["jeans" , 40],
    ["sun glass" , 20],
])

let shp = 0 


shp += store.get("jeans")
store.set("jeansss" , 40)
store.delete("jeansss" , 40)
console.log(store.has("jeansss" , 40))
console.log(store.size)

console.log(shp)


store.forEach(
    (value,key) => console.log(`${key} £${value}`)
    ) 

    // باختصار الماب عبارة عن اوبجت معاه مفتاح و قمية كويس مرره كانه
    //تو دايمنشن اري بس اسهل في الاستخدام