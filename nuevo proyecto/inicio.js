function enviarInscripcion() {
    var nombre = document.getElementById('nombre').value;
    
  
var edad = parseInt(document.getElementById('edad').value);
    var sexo = document.getElementById('sexo').value;
    
    
var peso = parseInt(document.getElementById('peso').value);
    
    va
var experiencia = document.getElementById('experiencia').value;
    var frecuencia = document.getElementById('frecuencia').value;
    
    v
var alimentacion = document.getElementById('alimentacion').value;

    // Validaciones adicionales según tus requisitos
    if (sexo === 'masculino' && edad >= 20 && edad <= 30 && peso >= 60 && peso <= 80 &&
        experiencia === 
        experienc
'principiante' && frecuencia === '3-dias' && alimentacion === 'omnivoro') {
        // Redirigir o mostrar la rutina según tus necesidades
        
        mostrarR
mostrarRutina();
    } else {
        // Mostrar un mensaje de que no cumple con los requisitos
        
        d
document.getElementById('mensaje').innerHTML = 'No cumples con los requisitos para la rutina.';
    }
}

func
function mostrarRutina() {
    
    
// Puedes personalizar esta función para mostrar la rutina de la manera que desees
    var mensaje = '¡Gracias por inscribirte, ' + nombre + '! Aquí está tu rutina personalizada:';
    // Puedes agregar más información sobre la rutina aquí
    
  
document.getElementById('mensaje').innerHTML = mensaje;
}