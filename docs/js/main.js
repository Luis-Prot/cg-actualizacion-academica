(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', function () {

        // Datos Usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');
        var errorDiv = document.getElementById('error')
        var botonRegistro = document.getElementById('btnRegistro');

        function validarCampos() {
            if (this.value == '') {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Este campo es obligatorio";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            } else {
                errorDiv.style.display = 'none';
                errorDiv.style.border = '1px solid #cccccc';
            };
        };

        function validarMail() {
            if (this.value.indexOf("@") > -1) {
                errorDiv.style.display = 'none';
                errorDiv.style.border = '1px solid #cccccc';
            } else {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Este no es un correo valido";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            };
        };
        // Validacion de Campos
        if document.getElementById('calcular'){
        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);
    }

    }); // DOMContentLoader
})();

$(function () {

    // Lettering
    $('.nombre-sitio').lettering();

    // Menu Fijo
    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight();
    $(window).scroll(function (){
        var scroll = $(window).scrollTop();
        if(scroll > windowHeight){
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraAltura+'px'});
        } else {
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});
        }
    });


    // Menu Responsive
    $('.menu-movil').on('click', function(){
        $('.navegacion-principal').slideToggle();
    });

    // Programa de conferencias
    $('.programa-evento .info-curso:first').show()
    $('.menu-programa a:first').addClass('activo');

    $('.menu-programa a').on('click', function () {
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').fadeOut(500);
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false
    });

    // Contador no implementado
    // Animaciones para cuenta-regresiva
    // $('.cuenta-regresiva ul li:nth-child(1) p').animateNumber({number:3}, 1200);

    // Cuenta regresiva
    $('.cuenta-regresiva').countdown('2020/12/1 09:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });

});