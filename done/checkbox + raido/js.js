const mycheckbox =document.getElementById("mycheckbox")



//document.getElementById("mybtn").onclick =

function real(){
/*if(mycheckbox.checked == true){
document.writeln("yr subscribed")
}else{
    document.writeln("yrn't subscribed")
*/


const A = document.getElementById("A")
const B = document.getElementById("B")
const C = document.getElementById("C")

if(A.checked){
    document.writeln("GG")
}
else if(B.checked){
    document.writeln("FF")
}
else if(C.checked){
    document.writeln("CC")
}
else{
    document.write("plz choose something")
}
}