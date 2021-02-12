$(document).ready(function(){
    
    /*
    var formularioNew = $('#formularioNew');
    var nombreNew = $('#nombreNew')
    var apellidoNew = $('#apellidoNew');
    var emailNew = $('#emailNew');
    var passNew = $('#passNew');
    
    
    function valNomNew(e){
    
        if (nombreNew.val() == '' || nombreNew.val() == null) {
            e.preventDefault();
            $('input[type="text"] + .errorNew').css('display', 'block');
        } else {
            $('input[type="text"] + .errorNew').css('display', 'none');
            nombreok = true;
    
        }
        
    }
    
    function valApeNew(e){
    
        if (apellidoNew.val() == '' || apellidoNew.val() == null) {
            e.preventDefault();
            $('input[type="texto"] + .errorNew').css('display', 'block');
        } else {
            $('input[type="texto"] + .errorNew').css('display', 'none');
    
        }
        
    }
    
    function valEmailNew(e){
    
        if (emailNew.val() == '' || emailNew.val() == null) {
            e.preventDefault();
            $('input[type="email"] + .errorNew').css('display', 'block');
        } else {
            $('input[type="email"] + .errorNew').css('display', 'none');
    
        }
        
    }
    
    
    function valPassNew(e){
    
        if (passNew.val() == '' || passNew.val() == null) {
            e.preventDefault();
            $('input[type="password"] + .errorNew').css('display', 'block');
        } else {
            $('input[type="password"] + .errorNew').css('display', 'none');
    
        }
        
    }
    
    
    
    
    
    function validacionNew(e){
        valNomNew(e);
        valApeNew(e);
        valEmailNew(e);
        valPassNew(e);
    }
    
    formularioNew.on('submit', validacionNew);
    
    */

   var url = 'http://localhost:3000/usuarios';
   var users = [];
   
   $(window).on("load",  async () => {
       try {
           users = (await axios.get(`${url}`));
           console.log(users)
       } catch (error) {
           console.log(err)
       }
       
       var formularioExist = $('#formularioExist');
       var emailExist = $('#emailExist');
       var passExist = $('#passExist');
       var prueba = true;

       
       
       function valUser(e){
       
           if (emailExist.val() == '' || emailExist.val() == null) {
               e.preventDefault();
               $('input[type="email"] + .errorUser').css('display', 'block');
           } else {
               $('input[type="email"] + .errorUser').css('display', 'none');
       
           }
           
       }
       
       
       function valPass(e){
       
           if (passExist.val() == '' || passExist.val() == null) {
               e.preventDefault();
               $('input[type="password"] + .errorUser').css('display', 'block');
           } else {
               $('input[type="password"] + .errorUser').css('display', 'none');
           }
           
       }
       
       
       
       function validacion(e){
           valUser(e);
           valPass(e);
       }
       
       if (prueba = true){
        formularioExist.on('submit', validacion)
        break
       } else {

            $('#signIn').on("click", function() {
                let userOk = false;
                let passOk = false;
                for (var i = 0; i < users.data.length; i++){
                    if ($('#emailExist').val() == users.data[i].email){
                        userOk = true;
                        if ($('#passExist').val() == users.data[i].password){
                            passOk = true;
                            break;
                        } else {
                            break;
                        }
                    }
                }
        
                if (userOk == true && passOk == true){
                    alert(`Bienvenid@ de nuevo a Yo Medium ${users.data[i].nombre}`);
                } else if (userOk == true && passOk == false){
                    alert(`${users.data[i].nombre} el password es incorrecto, vuelva a introducirlo.`)
                } else {
                    alert('Hola!! vemos que no eres usuario, si lo deseas puedes registrarte rellenando nuestro formulario de alta')
                }
                /*window.location.href = 'index.html';*/
        
            });
        }
    });
       
});


