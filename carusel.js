>

setInterval(cambiarImagen,3000));
var foto=1;
function cambiarImagen(){
if (foto==1){
    document.getElementById("buzo-1.jpg").hidden=true;
    document.getElementById("taza-1.jpg").hidden=true;
    document.getElementById("barbijo-1.png").hidden=true;
    document.getElementById("buzo-2.jpg").hidden=false;
    document.getElementById("taza-2.jpg").hidden=false;
    document.getElementById("barbijo-2.png").hidden=false;
    foto+1;
}else if(foto==2){
    document.getElementById("buzo-2.jpg").hidden=true;
    document.getElementById("taza-2.jpg").hidden=true;
    document.getElementById("barbijo-2.png").hidden=true;
    document.getElementById("buzo-3.jpg").hidden=false;
    document.getElementById("taza-3.jpg").hidden=false;
    document.getElementById("barbijo-3.png").hidden=false;
    foto+1;
}else if(foto==3){
    document.getElementById("buzo-3.jpg").hidden=true;
    document.getElementById("taza-3.jpg").hidden=true;
    document.getElementById("barbijo-4.png").hidden=true;
    document.getElementById("buzo-4.jpg").hidden=false;
    document.getElementById("taza-4.jpg").hidden=false;
    document.getElementById("barbijo-4.png").hidden=false;
    foto+1;
}else if(foto==4){
    document.getElementById("buzo-4.jpg").hidden=true;
    document.getElementById("taza-4.jpg").hidden=true;
    document.getElementById("barbijo-4.png").hidden=true;
    document.getElementById("buzo-1.jpg").hidden=false;
    document.getElementById("taza-1.jpg").hidden=false;
    document.getElementById("barbijo-1.png").hidden=false;
    foto+1;
}
}


