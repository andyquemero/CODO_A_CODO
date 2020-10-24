
// llamo a formulario y agrego evento submit. 
document.addEventListener("DOMContentLoaded", function () {
    let formu = document.getElementById("formulario");
    formu.addEventListener('submit', validarForm);
});
let cont = 0;
// ? validamos usuario 
function validarForm(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    // ! Validamos que el campo usuario no venga vacio
    if (usuario.length == 0) {
        alert('CAMPO USUARIO DEBE INGRESAR UN MAIL');
        return;
    } else {
        //! Validamos que usuario  contenga @
        for (const user of usuario) {
            console.log("Valor de susuario ingresado: " + user);
            if (user == "@") {
                cont++;
                break;
            }
        }
        if (cont == 0) {
            alert("USUARIO DEBE CONTENER UN MAIL VALIDO")
            return;
        }
    }
    //? validamos contraseña 
    var password = document.getElementById('password').value;
    console.log("pass ingresado :" + password);
    //validamos que contraseña contenga 6 caracteres como minimo.
    if (password.length < 6) {
        alert("CONTRASEÑA DEBE CONTENER 6 CARACTERES O MAS");
        return;
    }
    this.submit(alert("GRACIAS :D, TODO CORRECTO "));
}