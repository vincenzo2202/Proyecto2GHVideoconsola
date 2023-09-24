let pantalla = document.getElementById("screen");
const cambiarBoton = document.getElementById("flechitas");
const cambiarJoy = document.getElementById("joyB");
let luz = document.getElementById("power");
let luzY = document.getElementById("hold");
let luzW = document.getElementById("wifi");

const cambiarCirculos = document.getElementById("circulitos");

const imagenes = ["url('../img/LOL.jpg')", "url('../img/CRASH.jpg')", "url('../img/GTA.jpg')", "url('../img/MARIO.jpg')"];

let contador = 0;

const botonOn = document.querySelector("#start");

let botonOnEncendido = false;

botonOn.addEventListener("click", () => {
    if (!botonOnEncendido) {
        pantalla.style.backgroundImage = "url('../img/play1gif2.gif')";
        luz.style.backgroundColor = "Green";
        luzY.style.backgroundColor = "Yellow";
        luzW.style.backgroundColor = "Yellow";

        cambiarBoton.addEventListener("click", () => {
            contador = (contador + 1) % imagenes.length;
            pantalla.style.backgroundImage = imagenes[contador];
            pantalla.alt = `pantalla ${contador + 1}`;
        });

        cambiarJoy.addEventListener("click", () => {
            contador = (contador + 1) % imagenes.length;
            pantalla.style.backgroundImage = imagenes[contador];
            pantalla.alt = `pantalla ${contador + 1}`;
        });

        document.addEventListener("click", (e) => {
            if (e.target.id === 'Accion1') {
                pantalla.style.backgroundImage = "url('../img/LOL.jpg')";
            } else if (e.target.id === 'Accion2') {
                pantalla.style.backgroundImage = "url('../img/CRASH.jpg')";
            } else if (e.target.id === 'Accion3') {
                pantalla.style.backgroundImage = "url('../img/GTA.jpg')";
            } else if (e.target.id === 'Accion4') {
                pantalla.style.backgroundImage = "url('../img/MARIO.jpg')";
            }else if (e.target.id === 'reset') {
                pantalla.style.backgroundImage = "url('../img/menupsp.png')";
            }
        });

        botonOnEncendido = true;
        posicion = 0;

    } else {
        pantalla.style.backgroundImage = "";
        pantalla.style.backgroundSize = "cover";
        pantalla.style.filter = "none";
        luzY.style.backgroundColor = "Gray";
        luz.style.backgroundColor = "Gray";
        luzW.style.backgroundColor = "Gray";
        botonOnEncendido = false;
        posicion = 0;
    }
});