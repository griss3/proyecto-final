function cambiarContenido(tab) {
    
    document.querySelectorAll('.contenido').forEach(function (contenido) {
        contenido.classList.add('hidden');
    });

    
    document.getElementById(tab + 'Contenido').classList.remove('hidden');
}





function mostrarProducto(numeroProducto) {
    
    document.getElementById('contenedor-productos').style.display = 'none';

    
    var imagenSrc = document.querySelector('.producto:nth-child(' + numeroProducto + ') img').src;
    var nombreProducto = document.querySelector('.producto:nth-child(' + numeroProducto + ') .nombre-producto').innerText;

    
    document.getElementById('producto-imagen').src = imagenSrc;
    document.getElementById('producto-nombre').innerText = nombreProducto;
    document.getElementById('producto-seleccionado').style.display = 'flex';
}
