//VALIDACION DEL FORMULARIO-con expresiones regulares 

const validNombre = /^[a-zA-ZÀ-ÿ\s]+$/;              
const validMail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
const validAlim = /^[a-zA-ZÀ-ÿ\s]+$/;
const validMusica = /^[a-zA-ZÀ-ÿ\s]+$/; 
                                              
const nombre = document.getElementById('nombre');   
const mail = document.getElementById('mail');
const invitado = document.getElementById('invitado');
const alimento = document.getElementById('prefAlim');
const confPresente = document.getElementById('presente');
const confAusente = document.getElementById('ausente');


const error1 = document.getElementById('error1');    
const error2 = document.getElementById('error2');       
const error4 = document.getElementById('error4');
const error5 = document.getElementById('error5');


                                                   
const form = document.getElementById('formulario');   
    form.addEventListener('submit', function(evt){    
        
        evt.preventDefault();                         
    
        let mensajesError1 = [];         
        let mensajesError2 = [];
        let mensajesError3 = [];
        let mensajesError4 = [];
        let mensajesError5 = [];

        if(!validNombre.test(nombre.value)){          
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

        error1.innerHTML= mensajesError1.join("");  
        error2.innerHTML= mensajesError2.join("");    
        error3.innerHTML= mensajesError3.join(""); 
        error4.innerHTML= mensajesError4.join("");
        error5.innerHTML= mensajesError5.join("");
    });
