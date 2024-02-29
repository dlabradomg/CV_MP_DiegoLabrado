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



// Incendios en tiempo real


// require(["esri/Map",
//   "esri/views/MapView",
//   "esri/layers/FeatureLayer",
//   "esri/rest/support/Query",
//   "esri/layers/GraphicsLayer"],
//   (Map, MapView, FeatureLayer, Query, GraphicsLayer) => {

//     const mapa = new Map({
//       basemap: "topo-vector"
//     });

//     const vista = new MapView({
//       container: "viewDiv",
//       map: mapa,
//       zoom: 6,
//       center: [-3.5, 40]
//     });

//     const mundo = new FeatureLayer({
//       url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Countries/FeatureServer/0'
//     })

//     const incendios = new FeatureLayer({
//       url: 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/MODIS_Thermal_v1/FeatureServer'
//     })


//     let capaGrafica = new GraphicsLayer()


//     let parametrosQuery = new Query({
//       where: "COUNTRY = 'SPAIN'",
//       returnGeometry: true,
//       outFields: ['*']

//     })

//     mundo.queryFeatures(parametrosQuery)
//       .then((resultados) => {

//         resultados.features.map((entidad) => {

//           const queryPoligons = new Query({
//             geometry: entidad.geometry,
//             spatialRelationship: "contains",
//             returnGeometry: true,
//             where: 'CONFIDENCE > 50'

//           })


//           incendios.queryFeatures(queryPoligons)
//             .then(function (simbologia) {
//               let features = simbologia.features.map((elemento) => {
//                 elemento.symbol = {
//                   type: "picture-marker", 
//                   url: "https://cdn-icons-png.flaticon.com/512/1172/1172477.png?w=740&t=st=1686904179~exp=1686904779~hmac=88debfe6e746b67f6d5ea14f8b3de9cda0bb4863f2853270d04519720ffda663",
//                   width: "40px",
//                   height: "40px",
//                 }
//                 return elemento
//               }

//               )
//               capaGrafica.addMany(features)

//               mapa.add(capaGrafica)
//             })
//         })
//       })

//   })




