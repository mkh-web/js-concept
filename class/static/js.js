class test{
    
    static numcars = 0 
    constructor(model){
        this.model = model
        test.numcars++
    }

     static mohnd() {
        console.log("3.2.1 go")
    }

}


const car1 = new test("bmw")
const car2 = new test("elntart")
const car3 = new test("mercdes")

console.log(test.numcars)
test.mohnd()

//سالاسك عبارة غن ككلمة تسمح لك تسوي متغير خاص ف الكلاس
//تنفع ف الاشياء الي تسويها بشكل عام و كذا
//math برضو نفس الحكاية
