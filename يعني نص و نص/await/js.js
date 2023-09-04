//الاويت هنا ايش الفايدة منها يختصر عليك موضوع ال 
//then + catch

//برضو يخلي الفنكشن المسؤولة على باقي العمليات تنتظر لين ما تخلص
/الفنكشن الي قبلها /

async function loadfile(){
    let fileload = false
    
    if(fileload){
        return "fileload"
    }else{
        throw "file noe load"
    }
}

async function ss(){
    try{    
    let msg = await loadfile()
    console.log(msg)
    }
    catch(error){
    console.log(error)
    }
}

ss()
    
    