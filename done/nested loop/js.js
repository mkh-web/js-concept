let row = window.prompt("enter row")
let col = window.prompt("enter col")
//تستخدم عشان تكرر كود معين لعدد محدد من المرات
for(let i =1 ;i<= row ; i++){
    for(let j =1 ;j<= col ; j++){
   let b = document.getElementById("A")
    b.innerHTML +=j
}
document.getElementById("A").innerHTML += "<br>" 
}

//الفرق بين ال فور و الوايل ---الوايل تستخدم حتى يتحقق شرط معين --الفور تكون زي العداد في الغالب