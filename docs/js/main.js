(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', function () {

        // Datos Usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var enail = document.getElementById('email');
        var errorDiv = document.getElementById('error')
        var botonRegistro = document.getElementById('btnRegistro');

        // Validacion de Campos
        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);

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

        function validarMail (){
            if (this.value.indexOf("@") > -1){
                errorDiv.style.display = 'none';
                errorDiv.style.border = '1px solid #cccccc';
            } else {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Este no es un correo valido";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            };
        };


    }); // DOMContentLoader
})();