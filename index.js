//preventDefault
window.addEventListener('DOMContentLoaded', function(event){
    
    var form_register = document.querySelector('#form-register');
    form_register.addEventListener('submit', function (event){ 

        var canSubmit = true;
        var input_name = document.querySelector('#input_name');

        if(input_name.value == ""){
            document.querySelector('#name_container .input-error').innerHTML = 'El nombre es obligatorio';
            canSubmit = false;
        } else {
            if(input_name.value.length < 3){
                document.querySelector('#name_container .input-error').innerHTML = "El nombre debe tener mas de 3 caracteres";
                canSubmit = false;
        }else{
                document.querySelector('#name_container .input-error').innerHTML = "";
            }
        }

        //apellido
        var input_last_name = document.querySelector('#input_last_name');

        if(input_last_name.value == ""){
            document.querySelector('#last_name_container .input-error').innerHTML = 'El apellido es obligatorio';
            canSubmit = false;
        } else {
            if(input_last_name.value.length < 4){
                document.querySelector('#last_name_container .input-error').innerHTML = "El apellido debe tener mas de 4 carácteres";
                canSubmit = false;
        }else{
                document.querySelector('#last_name_container .input-error').innerHTML = "";
            }
        }



        //cedula

        var input_cedula = document.querySelector('#input_cedula');

        if(input_cedula.value == ""){
            document.querySelector('#cedula_container .input-error').innerHTML = 'La cédula es obligatorio';
            canSubmit = false;
        } else {
            if(!isNaN(input_cedula.value)){
                
                if(input_cedula.value.length == 10 ){
                    document.querySelector('#cedula_container .input-error').innerHTML = "";
                }else{
                    document.querySelector('#cedula_container .input-error').innerHTML = 'Deben ser 10 numeros';
                    canSubmit = false;
                }

            }else{
                document.querySelector('#cedula_container .input-error').innerHTML = 'Debe ser caracter númerico';
                canSubmit = false;
            }
        }




        //email

        var input_email = document.querySelector('#input_email');

        if(input_email.value == ""){
            document.querySelector('#email_container .input-error').innerHTML = 'El correo electrónico es obligatorio';
            canSubmit = false;
        } else {

            var indexOne = input_email.value.indexOf("@");
            var indexTwo = input_email.value.indexOf(".");

            if(indexOne < 0 || indexTwo < 0){
                document.querySelector('#email_container .input-error').innerHTML = "El correo debe tener @ y un dominio";
                canSubmit = false;
        }else{
                document.querySelector('#email_container .input-error').innerHTML = "";
            }
        }


        if(!canSubmit){
            event.preventDefault();
        }

    })
    
})