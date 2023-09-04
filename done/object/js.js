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

car.drive()

//هنا الابوجكت عبارة عن مجموعة من الخصائص و المتغيرات و الفنكشن الي تسوي وظائف معينة 
//و تقدر تتعامل معاها كانها اوبجكت