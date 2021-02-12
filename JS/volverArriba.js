$(document).ready(function(){

    var btnVolverArriba = $('#btnVolverArriba');


    $(window).on('scroll', function(){

        /*var top = $('#topPagina').offset().top;*/
        
        if ($(window).scrollTop() >=  100){

            btnVolverArriba.css('margin-right' , 0);


        } else if ($(window).scrollTop() <  100){

            btnVolverArriba.css('margin-right' , '-60px')

        }
    });



    $('a.volver-arriba').on('click', function(e){
        e.preventDefault();

        if ($(window).scrollTop() != 0) {
            $('html , body').animate({scrollTop: 0},1000)
        }

    });
})