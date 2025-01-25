window.onload = function() {
    const cookieBanner = document.getElementById('cookie-banner');
    cookieBanner.style.display = 'block'; // Muestra el banner al cargar la página

    const acceptButton = document.getElementById('accept-cookies');
    acceptButton.onclick = function() {
        cookieBanner.style.display = 'none'; // Oculta el banner cuando se hace clic en aceptar
    };
};

 // Obtener el modal
 var modal = document.getElementById("myModal");
    
 // Obtener el botón que abre el modal
 var btn = document.getElementById("openModal");

 // Obtener el elemento <span> que cierra el modal
 var span = document.getElementsByClassName("close")[0];

 // Cuando el usuario hace clic en el botón, abre el modal 
 btn.onclick = function() {
     modal.style.display = "block";
 }

 // Cuando el usuario hace clic en <span> (x), cierra el modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // Cuando el usuario hace clic en cualquier parte fuera del modal, cierra el modal
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

 // Cerrar el modal al enviar el formulario
 var form = modal.querySelector('form');
 form.onsubmit = function() {
     // Aquí puedes agregar lógica para enviar el formulario, si es necesario.
     modal.style.display = "none"; // Cierra el modal al enviar
     return false; // Evita el envío real del formulario (puedes quitar esto si deseas enviar el formulario)
 }




 const parrafos = document.querySelectorAll('.carruseltexto');
let indiceActual = 0;

// Función para actualizar qué párrafo es visible
function actualizarPárrafo() {
    // Ocultamos todos los párrafos
    parrafos.forEach((p, index) => {
        p.classList.remove('visible');
        if (index === indiceActual) {
            p.classList.add('visible'); // Mostramos solo el párrafo actual
        }
    });
}

// Flechas de navegación
const btnAtras = document.getElementById('atras');
const btnAdelante = document.getElementById('adelante');

// Evento para la flecha de 'Atrás'
btnAtras.addEventListener('click', () => {
    indiceActual = (indiceActual === 0) ? parrafos.length - 1 : indiceActual - 1;
    actualizarPárrafo();
});

// Evento para la flecha de 'Adelante'
btnAdelante.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % parrafos.length;
    actualizarPárrafo();
});

// Mostrar el primer párrafo al cargar la página
actualizarPárrafo();