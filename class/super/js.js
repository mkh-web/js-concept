class test{
    alive = true
    name = "rabit"

    eat(){
        console.log("he's eating")
    }

    sleep(){
        console.log("he's sleeping")
    }


    
    constructor(name,age,spedd){
        this.name = name
        this.age = age   
    }
}

class test1 extends test{
    constructor(name,age,spedd){
        super(name,age)
        this.spedd = spedd
    }
}


const b = new test1("mohnd",20 , 50)
console.log(b.name , b.age , b.spedd)
//هنا يشرح لك انو كلمة السوبر تستخدم عشان توصل لمتغيرات موجودة داخل الكونستركتر 
//طبعا تحطها ف الكلاس الاب بعدين تروح كلاس است الثانية و تستخدم كلمة السوبر
