//ALERT Y PROMPT DE 2DA PREENTREGA!!!//
/*let nombreCompleto= prompt(`Queremos saber tu opinion sobre SOSTENIBILIDAD EN RIO GRANDE, por favor dejanos tu datos a continuacion.    
     ¿Cual es tu nombre completo?`);

if (nombreCompleto=="") {alert (`No ingresaste tu Nombre Completo`);} nombreCompleto= prompt(`Queremos saber tu opinion sobre SOSTENIBILIDAD EN RIO GRANDE, por favor dejanos tu datos a continuacion.    
     ¿Cual es tu nombre completo?`);

console.log (nombreCompleto);

if ("let "=="") {alert (`Por favor completar`);}

let Nacionalidad= prompt(`Cuentanos..  
     ¿De que Nacionalidad eres?`)
console.log (Nacionalidad);

let Ciudad= prompt (`¿De qué Ciudad?`)
console.log (Ciudad);

let Comentarios= prompt (`Cuentanos que opinas al respecto,
     ¿Crées que se puede mejorar y lograr tener una ciudad Sostenible?`)
console.log (Comentarios);
if (Comentarios=="si") {alert (`Que Alegria, nosotros tambien creemos que se puede`);} else {alert (`Esperamos que se logren grandes cambios, cada aporte es importante`);}


let Comentarios2= prompt (`Tu opinión e ideas nos importan,
    ¿Qué crees que se puede mejorar y cómo?`)
console.log (Comentarios2);

alert (`Nos visitó ${nombreCompleto}, de Nacionalidad ${Nacionalidad}, de la ciudad de ${Ciudad}, y nos dejo su importantisima opinión para mejorar la ciudad de Rio Grande:
    ${Comentarios2}.`);

alert (`${nombreCompleto} ¡Gracias por visitarnos y dejarnos tus comentarios! ❤️ `);*/




// REGISTRO:
window.addEventListener('load', function(){

dbUsuarios = JSON.parse (localStorage.getItem ('usuarios'))
 //console.log(dbUsuarios);



 let inputName = document.querySelector('#Name');
 let inputTel = document.querySelector('#Tel');
 let inputEdad = document.querySelector('#Edad');
 let inputFechaDeNacieminto = document.querySelector('#fechaNac');
 let inputEmail = document.querySelector('#Email');
 let inputContraseña = document.querySelector('#Password');

 let divContenido = document.querySelector('#divContenidoRegistro');


 document.getElementById('form-registro').addEventListener('submit', function(event){
 
        event.preventDefault();

         let errores =[];
         let usuarioEncontrado = false;
         let usuario;
 
         for(let i=0; i< dbUsuarios.length ; i++){
             if(dbUsuarios[i].Email === inputEmail.value){
                 usuarioEncontrado = true;  
             }
         }
 
         if(inputContraseña.value.length < 6){
             errores.push('La contraseña debe contener al menos 6 caracteres.');
         (document.getElementById('Password').style.borderColor = "red");     
        }else {document.getElementById('Password').style.borderColor = "#1f53c5"};
         
         //Esto limpia el div donde se colocan las respuestas, al eliminar los nodos hijos del elemento
         while (divContenido.firstChild) {
             divContenido.removeChild(divContenido.firstChild);
         }
 
         if (errores.length > 0) {
             let ulErrores = document.createElement('ul');
             for(let i = 0; i < errores.length; i++){
                 ulErrores.innerHTML += `<li> ${errores[i]} </li>`
             }
             divContenido.appendChild(ulErrores);
         } else {
             if(usuarioEncontrado === true){
                 alert('El email ya se encuentra registrado!!')
                 let mensajeDeRespuesta = document.createElement('p');
                 mensajeDeRespuesta.innerHTML = `El email ${inputEmail.value} ya se encuentra registrado.`;
                 divContenido.appendChild(mensajeDeRespuesta);
             }
     
             if(usuarioEncontrado === false){
                 usuario = {
                     nombre: inputName.value,
                     email: inputEmail.value,
                     password: inputContraseña.value
                 }
 
                 dbUsuarios.push(usuario)
 
                 localStorage.setItem('usuarios', JSON.stringify(dbUsuarios));
                 sessionStorage.setItem('usuario', inputName.value);
 
                 alert(`Gracias ${inputName.value} por registrarte en nuestra página!!. Te invitamos a iniciar sesión 🌟`);
             }
            }
       } )
    })
        