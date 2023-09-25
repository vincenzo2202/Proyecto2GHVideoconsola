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


// Boton de encendido

botonOn.addEventListener("click", () => {
    if (botonOnEncendido == true) {

        pantalla.style.backgroundImage = "";
        pantalla.style.backgroundSize = "cover";
        pantalla.style.filter = "none";
        luzY.style.backgroundColor = "Gray";
        luz.style.backgroundColor = "Gray";
        luzW.style.backgroundColor = "Gray";

        cambiarBoton.removeEventListener("click", () => { });
        cambiarJoy.removeEventListener("click", () => { });

        botonOnEncendido = false;


    } else {
        pantalla.style.backgroundImage = "url('../img/play1gif2.gif')";
        luz.style.backgroundColor = "Green";
        luzY.style.backgroundColor = "Yellow";
        luzW.style.backgroundColor = "Yellow";

        botonOnEncendido = true;

    }
});

// Botones izquierdos de la consola

cambiarBoton.addEventListener("click", () => {
    if (botonOnEncendido === true) {
        contador = (contador + 1) % imagenes.length;
        pantalla.style.backgroundImage = imagenes[contador];
        pantalla.alt = `pantalla ${contador + 1}`;
    };
});

// Joystick de la consola 

cambiarJoy.addEventListener("click", () => {

    if (botonOnEncendido === true) {

        contador = (contador + 1) % imagenes.length;
        pantalla.style.backgroundImage = imagenes[contador];
        pantalla.alt = `pantalla ${contador + 1}`;
    }
});


// botones derechos de la consola 

document.addEventListener("click", (e) => {

    if (botonOnEncendido === true) {
        if (e.target.id === 'Accion1') {
            pantalla.style.backgroundImage = "url('../img/LOL.jpg')";
        } else if (e.target.id === 'Accion2') {
            pantalla.style.backgroundImage = "url('../img/CRASH.jpg')";
        } else if (e.target.id === 'Accion3') {
            pantalla.style.backgroundImage = "url('../img/GTA.jpg')";
        } else if (e.target.id === 'Accion4') {
            pantalla.style.backgroundImage = "url('../img/MARIO.jpg')";
        } else if (e.target.id === 'reset') {
            pantalla.style.backgroundImage = "url('../img/menupsp.png')";
        }
    }

});