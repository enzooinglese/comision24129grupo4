const validNombre =/^[a-zA-ZÀ-ÿ\s]+$/;              
const validMail =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
const validAlim =/^[a-zA-ZÀ-ÿ\s]+$/;
const validMusica =/^[a-zA-ZÀ-ÿ\s]+$/; 
                                              
const nombre = document.getElementById('nombre');   
const confPresente = document.getElementById('presente');
const confAusente = document.getElementById('ausente'); 
const mail = document.getElementById('mail');


const error1 = document.getElementById('error1');    
const error2 = document.getElementById('error2');     
const error3 = document.getElementById('error3');


//FUNCION PARA LA VALIDACION DEL FORMULARIO

    function validacionFormulario(evt) {

        let mensajesError1 = [];      
        let mensajesError2 = [];
        let mensajesError3 = [];

        if(!validNombre.test(nombre.value)){          
            evt.preventDefault()                             
            mensajesError1.push("El nombre no es válido");    
        }
        if(!(confPresente.checked || confAusente.checked)){
            evt.preventDefault()
            mensajesError2.push("ingrese una opción");      
        } 
        if(!validMail.test(mail.value)){
            evt.preventDefault()
            mensajesError3.push("El mail no es válido");      
        }
       
        error1.innerHTML= mensajesError1.join("");   
        error2.innerHTML= mensajesError2.join("");   
        error3.innerHTML= mensajesError3.join(""); 
    }

    const BTNENVIAR = document.getElementById('formulario');
    BTNENVIAR.addEventListener('submit', validacionFormulario);  


    
