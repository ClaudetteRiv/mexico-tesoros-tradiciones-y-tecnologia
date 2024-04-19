document.addEventListener('DOMContentLoaded', function() {
    // Mostrar la imagen de carga
    document.getElementById('esperando').style.display = 'none';

    document.getElementById('cargando').style.display = 'inline';
    setTimeout(function() {
        // Ocultar la imagen de carga y mostrar el icono
        document.getElementById('cargando').style.display = 'none';
        document.getElementById('retardo').style.display = 'inline';

        // Mostrar la imagen de carga nuevamente después de 2 segundos
        
    }, 2000); // 2000 milisegundos = 2 segundos


    
    document.getElementById('cargando2').style.display = 'inline';
    setTimeout(function() {
        // Ocultar la imagen de carga y mostrar el icono
        document.getElementById('cargando2').style.display = 'none';
        document.getElementById('esperando').style.display = 'inline';

        // Mostrar la imagen de carga nuevamente después de 2 segundos
        
    }, 2000); // 2000 milisegundos = 2 segundos


    document.getElementById('esperando3').style.display = 'none';
    document.getElementById('cargando3').style.display = 'inlane';
    setTimeout(function() {
        // Ocultar la imagen de carga y mostrar el icono
        document.getElementById('cargando3').style.display = 'none';
        document.getElementById('esperando3').style.display = 'inline';

        // Mostrar la imagen de carga nuevamente después de 2 segundos
        
    }, 2000); // 2000 milisegundos = 2 segundos

});