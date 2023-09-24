let pantalla = document.getElementById("screen");
const cambiarBoton = document.getElementById("flechitas");
let luz = document.getElementById("power");
let luzY =  document.getElementById("hold");
let luzW =  document.getElementById("wifi");

const cambiarCirculos = document.getElementById("circulitos");

const imagenes = ["url('../img/LOL.jpg')", "url('../img/CRASH.jpg')", "url('../img/GTA.jpg')", "url('../img/MARIO.jpg')"];

let contador = 0

 


document.addEventListener("click", (e) => {

    if (e.target.id === 'start') {

        pantalla.style.backgroundImage = "url('../img/play1gif2.gif')";
        luz.style.backgroundColor = "Green";
        luzY.style.backgroundColor = "Yellow";
        luzW.style.backgroundColor = "Yellow";




        cambiarBoton.addEventListener("click", (e) => {
            contador = (contador + 1) % imagenes.length;
            pantalla.style.backgroundImage = imagenes[contador];
            pantalla.alt = `pantalla ${contador + 1}`;
        });


        // cambiarCirculos.addEventListener("click", (e)=>{
        //     contador = (contador + 1) % imagenes.length;
        //     pantalla.style.backgroundImage = imagenes[contador];
        //     pantalla.alt = `pantalla ${contador + 1}`;
        // });




        document.addEventListener("click", (e) => {

            if (e.target.id === 'Accion1') {
                pantalla.style.backgroundImage = "url('../img/LOL.jpg')";

            } else if (e.target.id === 'Accion2') {
                pantalla.style.backgroundImage = "url('../img/CRASH.jpg')";
            } else if (e.target.id === 'Accion3') {
                pantalla.style.backgroundImage = "url('../img/GTA.jpg')";
            } else if (e.target.id === 'Accion4') {
                pantalla.style.backgroundImage = "url('../img/MARIO.jpg')";
            } else if (e.target.id === 'reset') {
                pantalla.style.backgroundImage = "none"
            }

        });
 

    } else {

        pantalla.style.backgroundImage = pantalla

    };
});




