let ul = document.getElementById("fruit")
console.log(ul)
//طبعا هنا بنتكلم عن خصائص الايفنت

ul.onmouseover(ss())
//onload وقت التحميل
//onchange وقت تغير عنصر يعني لما ندخل نص او شي
//onmuoseover زيها زي  الهوفر
//onmouseout لما تخرج من العنصر يتيغر البتاع
//onmousedown لما تضغط على عنصر 
//onmouseup لما تترفع يدك من العنصر 

function ss()
{
    ul.style.color = "red"
}