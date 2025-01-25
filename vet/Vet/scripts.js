

// // Función para ocultar el banner de cookies al aceptar
// document.getElementById('acceptCookies').addEventListener('click', function() {
//     // Ocultar el banner
//     document.getElementById('cookies').style.display = 'none';

//     // Guardar el estado en el almacenamiento local para recordar la elección
//     localStorage.setItem('cookiesAccepted', 'true');
// });

// // Comprobar si el usuario ya ha aceptado las cookies
// window.onload = function() {
//     if (localStorage.getItem('cookiesAccepted') === 'true') {
//         document.getElementById('cookies').style.display = 'none';
//     }
// };


document.addEventListener('DOMContentLoaded', function() {
    // Comprobar si el usuario ya ha aceptado las cookies
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        document.getElementById('cookies').style.display = 'none';
    }

    // Función para ocultar el banner de cookies al aceptar
    document.getElementById('acceptCookies').addEventListener('click', function() {
        document.getElementById('cookies').style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    });
});