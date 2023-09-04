const car = {
    model:"mustang",
    color:"red",
    year:"2023",

    drive : function(){
        console.log(`you drive the cae ${this.model}`)//كذا تعرف الفنكشن داخل الاوبجكت
    },

    brake : function(){
        console.log("you drive the brake")
    }
}

console.log(car.color)
//كلمة ذس عبارة عن ريفرنس للاوبجكت زي الدلالة يعني
//و تستخدم في الغالب في الاوبجكت و الكلاس عشان تستخدم متغير داخلهم
car.drive()

