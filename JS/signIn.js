var url = 'http://localhost:3000/usuarios';
var users = [];

$(window).on("load",  async () => {
    try {
        users = (await axios.get(`${url}`));
		console.log(users)
    } catch (error) {
        console.log(err)
    }

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

    
});