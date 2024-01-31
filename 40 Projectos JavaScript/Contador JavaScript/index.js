// variable del contador
let count = 0;


//seleccion del valor por  boton

const values = document.querySelector('#value'); // variable que guarde el elemento con el id value
const buttons = document.querySelectorAll('.buttons'); //  constante que selecciona todos los elementos que tengan esta clase buttons


/* buttons.forEach(function (btn) { btn.addEventListener("click", function (e) { console.log(e.currentTarget); }); }); */
/* este forech toma mi constante buttons y la duplica en un nuevo elemento llamado btn luegoi  a este elemento btn
la añado el metodo para escuchgar eventois addEventListener la cual va a escuchar el click y va a ejecutar una nueva funcion la cual resive el evento el cual lo reprecentamos en la variable e
luego hacemos un console.log de este evento con el metodo currentTarget el cual nois mostrara en la consola que boton se ha precinado */

buttons.forEach(function (btn) {//funcion foreach creamos una copia de buttons en la variable btn
    btn.addEventListener("click", function (e) {//btn escucha el evento click y ejecuta uana funcion
        const styles = e.currentTarget.classList; // la  constante style po medio del evneto resive la clase de la lista de clases
        console.log(styles);
        if (styles.contains('decrese')) { // dependiendo de la clase que escuche va a ejecutar una de las siguientes sentencias
            count--;
        }
        else if (styles.contains('increset')) {
            count++;
        }
        else {
            count = 0;
        }


        values.textContent = count; // guardamois en values lo que nos devuelbe count
        // cam biamos el coor de values dependiendo si count es mayor,menor o igual a 0
        if (count < 0) {
            values.style.color = "red"; // Cambia el color a rojo (puedes usar cualquier color CSS aquí)
        }
        else if (count > 0) {
            values.style.color = "green"; // Restablece el color a su valor predeterminado
        }
        else {
            values.style.color = "blue";
        }

    });
}); 