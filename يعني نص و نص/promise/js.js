const promise = new Promise((resolve,reject)=>{
//تعرف اوبجكت من كلاس و بعدها تسوي 
//ريسولف في حال كان ترو 
//ريجكت في حال كان فولس
    let fileload = false

    if(fileload){
        resolve("fileload")
    }else{
        reject("file noe load")
    }

})

promise.then((value)=>{console.log(value)}
    //هنا نقول اذا تنفذ البرومس خلاص روح نفذا هذا الشي 
    //الس هو نفس كلام السيكرونس و اسيكرونس
).catch((error)=>{console.log(error)})//الريجكت لازم تسوي ب الكاتش

//wt-----------------------------

const pro = (time) => new Promise(resolve => {setTimeout(resolve,time)
})

pro(3000).then(()=>{console.log("thx for waiting")})


//يحول من ايسكرونس الى سيكرونس ب الكود حقك