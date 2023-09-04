class Car{
    
    constructor(power){
        this._power = power//لما نستخدم _ كذا كاننا نقول للمطورين انو هذا متغير لا تغيره 
        this._gas = ""
    }

    get power(){//نستخدم نفس اسم المتغير عشان نعرف لمين ذي العملية 
        //و برضو القيت كاني اقول جيب هذا المتغير
        return `${this._power}hp`
    }
    get gas(){//نستخدم نفس اسم المتغير عشان نعرف لمين ذي العملية 
        return `${this._gas}L (${this._gas / 50 * 100 }%)`
    }

//فايدت القيت تخليك توصل لمتغير معين و تعدل شي بسيط عليه قبل لا يستخدم و كذا     
//السيت كاني اقول هات المتغير و لا يطلع الا بالشكل الي انا ابغاه
    set gas(value){
        if(value<= 50)
        this._gas = value
        else
        return console.log("empty")
 }

}



let car = new Car(400)

car.gas = 1000

console.log(car.power)
console.log(car.gas)

//يدخلون المتغيرات داخل فنكشن لما تستعمل الكونستركتر 
//get  هنا تعدل على القيمة
//set هنا تقدر تدخل قيمة 