var url = 'https://yomedium.herokuapp.com/usuarios';
var users = [];

$(window).on("load",  async () => {
    try {
        users = (await axios.get(`${url}`));
		console.log(users)
    } catch (error) {
        console.log(error)
    }

    $('#formularioNew').on("submit", async(event) => {
        event.preventDefault();
        console.log
		let isUser = false;
        for (var i = 0; i < users.data.length; i++){
			if ($('#emailNew').val() == users.data[i].email){
                isUser = true;
                alert('Hola ' + $('#nombreNew').val() + ' ya eres usuario, has de entrar en el area de Sign In.');
                break;
			}
		}
        if (isUser === false){

            let newUser = {
                id: ++users.data.length,
                nombre: $('#nombreNew').val(),
                apellido: $('#apellidoNew').val(),
                email: $('#emailNew').val(),
                password: $('#passNew').val()
            }

           await axios.post('https://yomedium.herokuapp.com/usuarios', newUser).then((response) => {
               console.log(response.data)
            });

            alert('Hola ' + $('#nombreNew').val() + ' le hemos mandado un mail para finalizar el proceso de alta.');

    

        }
	
    });

    
});