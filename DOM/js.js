//OBJ MODEL OR API
/*
document.URL
document.title = "goes here"
//document.location =


document.body.style.backgroundColor = "skyblue"
document.getElementById("btn").innerHTML = "hello"

let elment = document.getElementById("mytitle")

elment.style.backgroundColor = "white"


//wt----------------
//يتعامل مع مجموعة من العناصر على انها اري
let f= document.getElementsByName("f")
console.log(f[0])


f.forEach(f => {
    if(f.checked){
        console.log("lool")
    }else{
        return "f"
    }
})

//wt--------------
//نفس الحكاية حق الي قبله
let veg = document.getElementsByTagName("li")
veg[0].style.backgroundColor = "green"


//wt--------------
let desrt = document.getElementsByClassName("desrt")
desrt[0].style.backgroundColor = "green"


//wt--------------
let element = document.querySelector("#mytitle")//في ذا اقدر اخذ راحتي و اختار اي شي
element.style.backgroundColor = "green"

let element1 = document.querySelectorAll("li")//هنا اقدر اختار مجموعة من الاشياء بنفس الاسم و ادخلهم فور ايتش
//طبعا نفس الكلام ينطبق عليه كلهم
element1.forEach(
    element=>{
        element.style.backgroundColor = "green"
    })
    
 */   //wt--------------

    let element = document.querySelector("#f2")
     let child = element.lastElementChild//العناصر الى داخل العنصر
     let parent = element.parentElement//العناصر الي فوق العنصر المختار
     let silbiling = element.previousElementSibling//الاخوة الي قبل العنصر
     
     let childern = element.children[1]//طريقة ثانية ب الاري
     //تشتغل ب التيلدرن بس
     //الفور ايتش ما تشتغل
    // تقدر تخليه يعبر على كل العناصر براحتك بس ايش الفايدة و انت تفدر تختار الاب و تتخارج
     

     childern.style.backgroundColor = "green"
