//VALIDACION DEL FORMULARIO-con expresiones regulares 

const validNombre = /^[a-zA-ZÀ-ÿ\s]+$/;              //1-Declaración de variables con expresiones regulares que seran evaluadas mas abajo
const validMail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
const validAlim = /^[a-zA-ZÀ-ÿ\s]+$/;
const validMusica = /^[a-zA-ZÀ-ÿ\s]+$/; 
                                              
const nombre = document.getElementById('nombre');   //2-captura del valor ingresado por el usuario en el content.html con el id
const mail = document.getElementById('mail');
const invitado = document.getElementById('invitado');
const alimento = document.getElementById('prefAlim');
const confPresente = document.getElementById('presente');
const confAusente = document.getElementById('ausente');


const error1 = document.getElementById('error1');    //2-1-Creo un <p id=error1><p> en el html y lo ubico en donde quiero que aparezca el mensaje de error
const error2 = document.getElementById('error2');       //Luego capturo ese parrafo vacio para posteriormente decirle que quiero agregarle un mensaje
const error3 = document.getElementById('error3');
const error4 = document.getElementById('error4');
const error5 = document.getElementById('error5');




                                                      //3- agrego un id="formulario" en la etiqueta <form>
const form = document.getElementById('formulario');   //4-Se capturan los datos cargados en el  el formulario y se lo almacena en una variable form 
    form.addEventListener('submit', function(evt){    //4-1 esa captura se le agrega un evento, para q cuando se haga click en submit(confirmar), evalue la funcion (evt)
        
        evt.preventDefault();                         //4-2-se agrega un preventDefault(), para que el formulario no se envie por defecto, hasta que no se evalue la funcion 
    
        let mensajesError1 = [];         //4-3 se crea un array vacio para almacenar los mensajes que puedan ocurrir en la funcion al validar el formulario 
        let mensajesError2 = [];
        let mensajesError3 = [];
        let mensajesError4 = [];
        let mensajesError5 = [];

        if(!validNombre.test(nombre.value)){           //4-4-creo la condicion para cada valor cargado
            mensajesError1.push("El nombre no es válido");           
        }
        if(!(confPresente.checked || confAusente.checked)){
            mensajesError2.push("ingrese una opción");      
        } 
        if(!validMail.test(mail.value)){
            mensajesError3.push("El mail no es válido");      
        }
        if(!validNombre.test(invitado.value)){
            mensajesError4.push("El nombre no es válido");      
        }
        if(!validAlim.test(prefAlim.value)){
            mensajesError5.push("Dato no válido");      
        }

        error1.innerHTML= mensajesError1.join("");   //4-5-le digo a cada parrafo vacio, capturado en el punto 2, que se le ...
        error2.innerHTML= mensajesError2.join("");    //....adjunte cada mensaje de error, si se cumple la condicion del punto 4.4
        error3.innerHTML= mensajesError3.join(""); 
        error4.innerHTML= mensajesError4.join("");
        error5.innerHTML= mensajesError5.join("");
    });
