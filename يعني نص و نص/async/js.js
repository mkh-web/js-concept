//افضل من انك تسوي برومس و شغله و تسوي نفس شغلى البرومس بس تتعامل معاه على انها فنكشن

async function loadfile(){
    let fileload = false
    
    if(fileload){
        return "fileload"
    }else{
        throw "file noe load"
    }

}


    
    loadfile().then((value)=>{console.log(value)})
    .catch((error)=>{console.log(error)})
    