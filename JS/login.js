$(document).ready(function(){
    
var formularioExist = $('#formularioExist');
var emailExist = $('#emailExist');
var passExist = $('#passExist');


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

formularioExist.on('submit', validacion)


formularioNew.on('submit', validacionNew);


});