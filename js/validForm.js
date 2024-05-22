//VALIDACION DEL FORMULARIO-con expresiones regulares 

const validNombre = /^[a-zA-ZÀ-ÿ\s]+$/;              
const validMail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
const validAlim = /^[a-zA-ZÀ-ÿ\s]+$/;

                                              
const nombre = document.getElementById('nombre');   
const confPresente = document.getElementById('presente');
const confAusente = document.getElementById('ausente'); 
const mail = document.getElementById('mail');
const invitado = document.getElementById('invitado');
const listadoInvitados = document.getElementById('impListadoInvitados');
const alimento = document.getElementById('prefAlim');
 

const error1 = document.getElementById('error1');    
const error2 = document.getElementById('error2');     
const error3 = document.getElementById('error3');
const error4 = document.getElementById('error4');
const error5 = document.getElementById('error5');



//FUNCION PARA AGREGAR INVITADOS

const listaInvitados = [];

function agregarInvitado() {

    let mensajesError4 = [];
    
    if (validNombre.test(invitado.value)) {
        let dato = invitado.value;    
        listaInvitados.push(dato);

        let resultado = listadoInvitados;
        resultado.innerHTML = '';

        for (const dato of listaInvitados) {
            let datoParrafo = document.createElement('p');
            datoParrafo.innerText = dato;
            resultado.appendChild(datoParrafo);
        }
    }else{
        mensajesError4.push("El nombre no es válido");
    }
    error4.innerHTML= mensajesError4.join("");
}

const BTNINVITADOS = document.getElementById('btninvitados'); 
BTNINVITADOS.addEventListener('click', agregarInvitado);  



//FUNCION PARA VALIDACION DEL FORMULARIO
                                                  
const form = document.getElementById('formulario');   
    form.addEventListener('submit', function(evt){    
    
        let mensajesError1 = [];      
        let mensajesError2 = [];
        let mensajesError3 = [];
        let mensajesError5 = [];
        let mensajesError6 = [];

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
      
        if(validAlim.test(alimento.value) || alimento.value==""){
            mensajesError5.push("");  
        }else{
            evt.preventDefault();
            mensajesError5.push("Dato no válido"); 
        }
    
        error1.innerHTML= mensajesError1.join("");   
        error2.innerHTML= mensajesError2.join("");   
        error3.innerHTML= mensajesError3.join(""); 
        error5.innerHTML= mensajesError5.join("");
    });
