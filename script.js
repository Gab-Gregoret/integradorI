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
const ffvup = document.getElementsByClassName("flowersup");
const ffvdwn = document.getElementsByClassName("flowersdwn");
const ffvtop = document.getElementById("flowersdrop");
const ffvmain = document.getElementById("Flowers");
for (const upffv of ffvup){
    upffv.addEventListener("click", function(){
        abrirSeccion(ffvmain,ffvup,ffvdwn);
        ffvtop.style.backgroundColor = "rgb(71,1,32)";
    })
}
for (const dwnffv of ffvdwn){
    dwnffv.addEventListener("click", function(){
        cerrarSeccion(ffvmain,ffvup,ffvdwn);
        ffvtop.style.backgroundColor = "";
    })
}
const egoup = document.getElementsByClassName("egoup");
const egodwn = document.getElementsByClassName("egodwn");
const egotop = document.getElementById("egodrop");
const egomain = document.getElementById("Ego");
for (const upe of egoup){
    upe.addEventListener("click", function(){
        abrirSeccion(egomain,egoup,egodwn);
        egotop.style.backgroundImage = "url('assets/hw_desktop_wallpaper_1.png')";
        egotop.style.color = "black";
    })
}
for (const dwne of egodwn){
    dwne.addEventListener("click", function(){
        cerrarSeccion(egomain,egoup,egodwn);
        egotop.style.backgroundImage = "";
        egotop.style.color = "";
    })
}
let volver = document.getElementById("volver");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    volver.style.display = "block";
  } else {
    volver.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
}
volver.addEventListener("click", function(){
    topFunction();
});
const formulario = document.getElementById("formulario");
formulario.addEventListener('submit', async (event) => {
    event.preventDefault(); 
    const edad = document.getElementById("edad").value;
    const nombre = document.getElementById("nombre").value;
  try{
    if(edad <  18) throw new Error("Acceso restringido a menores");
    if(edad > 99) throw new Error("Ingrese una edad valida");
    alert("Gracias por contactarse con nosotros, " + nombre);
  }
  catch(error){
    alert(error.message);
  }
});
const cancionespfa = [
    "Simmer",
    "Leave It Alone",
    "Cinnamon",
    "Creepin'",
    "Sudden Desire",
    "Dead Horse",
    "My Friend",
    "Over Yet",
    "Roses/Lotus/Violet/Iris",
    "Why We Ever",
    "Pure Love",
    "Taken",
    "Sugar On The Rim",
    "Watch Me While I Bloom",
    "Crystal Clear"
];
const cancionpfa = cancionespfa
.map(item => `<li>${item}</li>`)
.join("");
const listapfa = document.getElementById("pfasongs");
const botonpfa = document.getElementById("pfasongsbtn");
botonpfa.addEventListener("click", function(){
    if(listapfa.style.display === "none"){
    listapfa.innerHTML = cancionpfa;
    listapfa.style.display = "block";
    botonpfa.innerText = "Cerrar lista";
    } else{
        listapfa.style.display = "none";
        botonpfa.innerText = "Ver lista de canciones";
    }
})
const cancionesffv = [
    "First Thing To Go",
    "My Limb",
    "Asystole",
    "Trigger",
    "Over Those Hills",
    "Good Grief",
    "Wait On",
    "KYRH",
    "Inordinary",
    "HYD",
    "No Use I Just Do",
    "Find Me Here",
    "Descansos",
    "Just A Lover"
];
const cancionffv = cancionesffv
.map(items => `<li>${items}</li>`)
.join("");
const listaffv = document.getElementById("ffvsongs");
const botonffv = document.getElementById("ffvsongsbtn");
botonffv.addEventListener("click", function(){
    if(listaffv.style.display === "none"){
    listaffv.innerHTML = cancionffv;
    listaffv.style.display = "block";
    botonffv.innerText = "Cerrar lista";
    } else{
        listaffv.style.display = "none";
        botonffv.innerText = "Ver lista de canciones";
    }
})
const egobtn = document.getElementById("egobtn");
const listaego = document.getElementById("listaego");
egobtn.addEventListener("click", function(){
    if(listaego.style.display === "none"){
        listaego.style.display = "block";
    } else {
        listaego.style.display = "none";
    }
})
document.addEventListener("keydown", (event) => {
    if(event.key === "Escape"){
        cerrarSeccion(pfamain,pfaup,pfadwn);
        cerrarSeccion(ffvmain,ffvup,ffvdwn);
        cerrarSeccion(egomain,egoup,egodwn);
        pfatop.style.backgroundColor = "";
        ffvtop.style.backgroundColor = "";
        egotop.style.backgroundImage = "";
        egotop.style.color = "";
    }
})