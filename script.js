function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}


function puedeReservar(tazasDisponibles) {
    return tazasDisponibles > 0;
}

      
    const botonReservar = document.querySelector("#boton-reservar");
    const contadorTazas = document.querySelector("#contador-tazas");

    botonReservar.addEventListener("click", function() {
        const tazasActuales = Number(contadorTazas.textContent);

        if (puedeReservar(tazasActuales)) {
            contadorTazas.textContent = tazasActuales - 1;
            console.log("Reserva Registrada con exito");
            alert("Reserva Registrada con exito");
        } else {
            botonReservar.textContent = "Sin cupos";
            botonReservar.disabled = true;
            console.log("No hay tazas disponibles para reservar");
            alert("No hay tazas disponibles para reservar");
        }
    });
