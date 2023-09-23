let pantalla = document.getElementById("screen");

document.addEventListener("click", (e)=>{
    if(e.target.id=== 'Accion1' || e.target.class === 'circleTop' ){
        pantalla.style.backgroundImage = "url('../img/LOL.jpg')";

    }else if (e.target.id === 'Accion2'){
        pantalla.style.backgroundImage = "url('../img/CRASH.jpg')";
    }else if (e.target.id === 'Accion3'){
        pantalla.style.backgroundImage = "url('../img/GTA.jpg')";
    }else if (e.target.id === 'Accion4'){
        pantalla.style.backgroundImage = "url('../img/MARIO.jpg')";}
});

 

