class std{
   constructor(name , age , gpa ){
this.name = name
this.age = age
this.gpa = gpa

   }

stdy(){
   console.log(`${this.name} is studing`)
}

}

const std1 = new std("monhnd" ,20 , 3.2)


console.log(std1.name)
console.log(std1.age)
console.log(std1.gpa)

std1.stdy()

//كونستركت كانه عبارة عن فنكشن تشتغل  اول ما تستدعي كلاس معين
//بحيث انك تعطيها خاصية على طول