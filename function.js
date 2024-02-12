//párrafo encabezado

let parrafoEncabezado = document.createElement('p')

let nodo = document.createTextNode('Puedes econtrar más información en los cuadros de abajo')

parrafoEncabezado.appendChild(nodo)

let seccionEncabezado = document.querySelector('.encabezado')

seccionEncabezado.appendChild(parrafoEncabezado)

//copiar el correo al portapales de mi equipo

document.querySelector(".correo").addEventListener('click', function () {

    correo = document.querySelector(".correo").innerText;

    navigator.clipboard.writeText(correo).then(function () {
        
        console.log('Texto copiado al portapapeles');
    })
        .catch(function (error) {

            console.error('Error al copiar el texto: ', error);
        });
});


//Enlace Contact us

let enlace = document.createElement('a')

enlace.href = 'https://es.linkedin.com/'

enlace.innerHTML = 'Encuéntrame en Linkedin'

let contacUS = document.querySelector('.enlaceLinkedin')

contacUS.appendChild(enlace)


// Añadir información elementoExperience

function masInfo() {
let informacionAdicional = "Aquí va la información adicional que quieres añadir."
document.getElementById("info").innerHTML += informacionAdicional

}


// Alerta que nos añade información
function masInfo() {
    alert("Sería un pacler detallarte mucho mejor la experiencia contactando conmigo, puedes pulsar en mi correo y copiarlo a tu portapales.");
    document.getElementById("info").disabled = true; // Deshabilitar el botón
}


//Alerta copiar el correo

const boton = document.querySelector('.correo');
        boton.addEventListener('click', function() {
            alert('¡Acabas de copiar mi correo al portapapeles de tu ordenador!');
        })