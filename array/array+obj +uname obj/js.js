class Car{
    
    constructor(power,year,model){
        this.power = power
        this.model = model
        this.year = year
    }
}


const car1 = new Car(500 , "med" , 2020)
const car2 = new Car(50000 , "bmw" , 2023)
const car3 = new Car(5000 , "elntatr" , 2021)

let car = [car1,car2,car3 //مجموعة من الاوبجكت الي اقدر اخزنها في كلاس و اطبعها مره وحدة و اتخارج
, new Car(20,"aam",3030)//الاوبجكت الغير مسمى ما ينفع تسوية الا في اري لانو هذة الطريقة الوحيدة عشان توصل له
, new Car(208,"aسam",303)
]


car.forEach(element => {console.log(`${element.power} ${element.model} ${element.year}`)});

//الاليمنت هنا يمثل اوبجكت عشان يوصل للكلاس  