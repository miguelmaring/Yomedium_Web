
$(document).ready(function () {
    var formulario = $('#folrmularioContacto');
    var nombre = $('#nombreFor');
    var email = $('#emailFor');
    var mensaje = $('#mensajeFor');
    var prueba = false;


 
    
    function valNombre(e){
    
        if (nombre.val() == '' || nombre.val() == null) {
            e.preventDefault();
            $('input[type="text"] + .error').css('display', 'block');
            prueba = true;

        } else {
            $('input[type="text"] + .error').css('display', 'none');
            prueba = true;
        }
        
    }
    
    
    function valEmail(e){
    
        if (email.val() == '' || email.val() == null) {
            e.preventDefault();
            $('input[type="email"] + .error').css('display', 'block');
        } else {
            $('input[type="email"] + .error').css('display', 'none');
        }
        
    }
    
    
    function valMensaje(e){
    
        if (mensaje.val() == '' || mensaje.val() == null) {
            e.preventDefault();
            $('textarea + .error').css('display', 'block');
        } else {
            $('textarea + .error').css('display', 'none');
        }
        
    }
    
    
    function validacion(e){
        valNombre(e);
        valEmail(e);
        valMensaje(e);
       
    }

    
    formulario.on('submit', validacion)

})




