function enviarInscripcion() {
    var nombre = document.getElementById('nombre').value;
    var edad = parseInt(document.getElementById('edad').value);
    var sexo = document.getElementById('sexo').value;
    
    
    var experiencia = document.getElementById('experiencia').value;
    var frecuencia = document.getElementById('frecuencia').value;
    

    //var alimentacion = document.getElementById('alimentacion').value;

    // Validaciones adicionales según tus requisitos
    if ( sexo === 'masculino') 
    if ( edad >= 20 && edad <= 30 ) 
    //if ( peso >= 60 && peso <= 80 )
    //     experiencia === 
    //    experiencia
    //if ( nivel de experiencia === "principiante" )
    if ( frecuencia === '3-dias')
    //if (alimentacion === 'omnivoro') {
        // Redirigir o mostrar la rutina según tus necesidades
        
    mostrarRutina();
    window.location.href= "hp20a30años.html"  
    }
//else{
        // Mostrar un mensaje de que no cumple con los requisitos
        
//document.getElementById('mensaje').innerHTML = 'No cumples con los requisitos para la rutina.';

//}
function mostrarRutina() {
        // Puedes personalizar esta función para mostrar la rutina de la manera que desees
    var mensaje = '¡Gracias por inscribirte, ' + nombre + '! Aquí está tu rutina personalizada:';
    // Puedes agregar más información sobre la rutina aquí
    document.getElementById('mensaje').innerHTML = mensaje;
}