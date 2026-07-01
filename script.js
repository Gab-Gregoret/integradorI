function zoomimg(img){
    img.style.width = "400px"
}
function zoomoutimg(img){
    img.style.width = "200px";
}
function abrirSeccion(seccion,titulosup,titulosdwn){
    seccion.style.display = "flex";
    seccion.style.flexDirection = "column";
    for (const tituloup of titulosup){
        tituloup.style.display = "none";
    }
    for (const titulodwn of titulosdwn){
        titulodwn.style.display = "block";
    }
}
function cerrarSeccion(seccion,titulosup,titulosdwn){
    seccion.style.display = "none";
    for (const tituloup of titulosup){
        tituloup.style.display = "block";
    }
    for (const titulodwn of titulosdwn){
        titulodwn.style.display = "none";
    }
}
const imagenes = document.getElementsByClassName("img");
for (const imagen of imagenes) {
    imagen.addEventListener("click", function() {
        if(imagen.style.width < "400px"){
    zoomimg(imagen);
        } else{
            zoomoutimg(imagen);
        }
});
}
const pfaup = document.getElementsByClassName("petalsup");
const pfadwn = document.getElementsByClassName("petalsdwn");
const pfatop = document.getElementById("petalsdrop");
const pfamain = document.getElementById("Petals");
for(uppfa of pfaup){
    uppfa.addEventListener("click", function(){
        abrirSeccion(pfamain,pfaup,pfadwn);
        pfatop.style.backgroundColor = "rgba(213,154,159)";
    })
}
for(dwnpfa of pfadwn){
    dwnpfa.addEventListener("click", function(){
        cerrarSeccion(pfamain,pfaup,pfadwn);
        pfatop.style.backgroundColor = "";
    })
}