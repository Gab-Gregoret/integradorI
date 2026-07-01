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