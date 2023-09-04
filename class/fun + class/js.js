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


function displayinfo(Car){
    console.log(Car.power)
    console.log(Car.model)
    console.log(Car.year)
}

function CHANGECOLOR(Car,power){
    Car.power = power
}


CHANGECOLOR(car3 , 99)
displayinfo(car2)

//واضح عملية التعديل بس الاستدعاء كل الي عليك انك تحط الاوبجكت و تتخارج 