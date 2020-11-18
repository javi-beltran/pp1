
setInterval(cambiarImagen,1000);
var foto=1;
function cambiarImagen(){
if (foto==1){
    document.getElementById("b1").hidden=true;
    document.getElementById("t1").hidden=true;
    document.getElementById("ba1").hidden=true;
    document.getElementById("b2").hidden=false;
    document.getElementById("t2").hidden=false;
    document.getElementById("ba2").hidden=false;
    foto==2;
}else if(foto==2){
    document.getElementById("b2").hidden=true;
    document.getElementById("t2").hidden=true;
    document.getElementById("ba2").hidden=true;
    document.getElementById("b3").hidden=false;
    document.getElementById("t3").hidden=false;
    document.getElementById("ba3").hidden=false;
    foto==3;
}else if(foto==3){
    document.getElementById("b3").hidden=true;
    document.getElementById("t3").hidden=true;
    document.getElementById("ba3").hidden=true;
    document.getElementById("b4").hidden=false;
    document.getElementById("t4").hidden=false;
    document.getElementById("ba4").hidden=false;
    foto==4;
}else if(foto==4){
    document.getElementById("b4").hidden=true;
    document.getElementById("t4").hidden=true;
    document.getElementById("ba4").hidden=true;
    document.getElementById("b1").hidden=false;
    document.getElementById("t1").hidden=false;
    document.getElementById("ba1").hidden=false;
    foto==1;
}
}


