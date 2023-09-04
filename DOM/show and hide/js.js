const btn = document.querySelector("#toggle")
const img = document.querySelector("#myimg")

btn.addEventListener("click",() => {

    if(img.style.visibility == "hidden"){
        img.style.visibility ="visible";
        console.log("lol");
    }else{
        console.log("lol2");
        img.style.visibility = "hidden";
    }
})