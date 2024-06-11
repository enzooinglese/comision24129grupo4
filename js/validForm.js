const validNombre =/^[a-zA-ZÀ-ÿ\s]+$/;              
const validMail =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
const validAlim =/^[a-zA-ZÀ-ÿ\s]+$/;
const validMusica =/^[a-zA-ZÀ-ÿ\s]+$/; 
                                              
const nombre = document.getElementById('nombre');   
const confPresente = document.getElementById('presente');
const confAusente = document.getElementById('ausente'); 
const mail = document.getElementById('mail');
const acompanante1 = document.getElementById('acompanante1');
const acompanante2 = document.getElementById('acompanante2');
const acompanante3 = document.getElementById('acompanante3');
const acompanante4 = document.getElementById('acompanante4');
const acompanante5 = document.getElementById('acompanante5');
const listadoInvitados = document.getElementById('impListadoInvitados');
 
const error1 = document.getElementById('error1');    
const error2 = document.getElementById('error2');     
const error3 = document.getElementById('error3');
const error4 = document.getElementById('error4');
const error5 = document.getElementById('error5');
const error6 = document.getElementById('error6');
const error7 = document.getElementById('error7');
const error8 = document.getElementById('error8');


//FUNCION PARA LA VALIDACION DEL FORMULARIO

    function validacionFormulario(evt) {

        let mensajesError1 = [];      
        let mensajesError2 = [];
        let mensajesError3 = [];
        let mensajesError4 = [];
        let mensajesError5 = [];
        let mensajesError6 = [];
        let mensajesError7 = [];
        let mensajesError8 = [];

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
        if(validNombre.test(acompanante1.value) || acompanante1.value==""){  
            mensajesError4.push("");  
        }else{
            evt.preventDefault();
            mensajesError4.push("Dato no válido"); 
        }
        if(validNombre.test(acompanante2.value) || acompanante2.value==""){  
            mensajesError5.push("");  
        }else{
            evt.preventDefault();
            mensajesError5.push("Dato no válido"); 
        }
        if(validNombre.test(acompanante3.value) || acompanante3.value==""){  
            mensajesError6.push("");  
        }else{
            evt.preventDefault();
            mensajesError6.push("Dato no válido"); 
        }
        if(validNombre.test(acompanante4.value) || acompanante4.value==""){  
            mensajesError7.push("");  
        }else{
            evt.preventDefault();
            mensajesError7.push("Dato no válido"); 
        }
        if(validNombre.test(acompanante5.value) || acompanante5.value==""){  
            mensajesError8.push("");  
        }else{
            evt.preventDefault();
            mensajesError8.push("Dato no válido"); 
        }

        error1.innerHTML= mensajesError1.join("");   
        error2.innerHTML= mensajesError2.join("");   
        error3.innerHTML= mensajesError3.join(""); 
        error4.innerHTML= mensajesError4.join(""); 
        error5.innerHTML= mensajesError5.join("");
        error6.innerHTML= mensajesError6.join("");
        error7.innerHTML= mensajesError7.join("");
        error8.innerHTML= mensajesError8.join("");
        /*error9.innerHTML= mensajesError9.join("");*/
    }

    const BTNENVIAR = document.getElementById('formulario');
    BTNENVIAR.addEventListener('submit', validacionFormulario);  


    

//FUNCION PARA MOSTRAR Y OCULTAR EL LISTADO DE ACOMPAÑANTES

function mostrarListado(){
    document.getElementById('acompanantes').style.display = 'block';
}

function ocultarListado(){
    document.getElementById('acompanantes').style.display = 'none';
}



    
    