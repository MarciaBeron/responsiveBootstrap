document.getElementById('opciones').addEventListener('hover', function(){
    const opcionesLink = document.getElementById('opciones');
    const opcionesList = document.getElementById('opcionesNormal');
    const navbarNav = document.getElementById('navbarNav');

    // Mostrar las opciones al hacer hover sobre el enlace
    opcionesLink.addEventListener('mouseenter', function() {
        opcionesList.style.display = 'block';
    });

    // Ocultar las opciones al salir del hover
    opcionesLink.addEventListener('mouseleave', function() {
        opcionesList.style.display = 'none';
    });

    // Mover la lista de opciones dentro de la navbarNav cuando se hace click en "Opciones"
    opcionesLink.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace
        // Mover la lista de opciones dentro de la barra de navegación
        if (!navbarNav.contains(opcionesList)) {
            navbarNav.appendChild(opcionesList);
            opcionesList.style.display = 'block'; // Asegurarse de que se muestre
        }
    });

})