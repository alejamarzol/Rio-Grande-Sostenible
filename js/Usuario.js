/*INICIO DE SESION*/ 
window.addEventListener('load', function(){

dbUsuarios= JSON.parse(localStorage.getItem('usuarios')) 
//console.log(dbUsuarios);
const user = sessionStorage.getItem('usuario')


let inputEmail= document.querySelector('#email');
let inputContraseña = document.querySelector('#password');
let divContenido = document.querySelector('#divContenidoSesion');
    
 document.getElementById('form-InicioSesion').addEventListener('submit', function(event){
   
           event.preventDefault();
   
         
           let errores = [];
           let usuarioEncontrado = false;
           let nombreDelUsuario;
   
           for(let i=0; i< dbUsuarios.length ; i++){
               if(dbUsuarios[i].email === inputEmail.value){
                   if(dbUsuarios[i].password == inputContraseña.value){
                       nombreDelUsuario = dbUsuarios[i].nombre;
                       usuarioEncontrado = true;
                   } else {
                       errores.push('La contraseña no coincide con la registrada!') }
               }               
           }

           for(let i=0; i< dbUsuarios.length ; i++){
        if(inputContraseña.value.length < 6){
        errores.push('La contraseña debe contener al menos 6 caracteres.');
        (document.getElementById('password').style.borderColor = "red");     
       }else {document.getElementById('password').style.borderColor = "#1f53c5"};
    }
    
            //Esto limpia el div donde se colocan las respuestas, al eliminar los nodos hijos del elemento
         while(divContenido.firstChild) 
            {divContenido.removeChild(divContenido.firstChild);}

       

           if (errores.length > 0) {
               let ulErrores = document.createElement('ul');
               for(let i = 0; i < errores.length; i++){
                   ulErrores.innerHTML += `<li> ${errores[i]} </li>`
               }
               divContenido.appendChild(ulErrores);
           } else {
            if(usuarioEncontrado === true){
                alert('Bienvenid@ a nuestra página 💚')
                let mensajeDeBienvenida = document.createElement('p');

                sessionStorage.setItem('usuario', nombreDelUsuario);
                mensajeDeBienvenida.innerHTML = `Bienvenid@ ${sessionStorage.getItem('usuario')} a nuestra página de Sostenibilidad - Rio Grande`;
                divContenido.appendChild(mensajeDeBienvenida);
            }
           if (usuarioEncontrado === false){
            alert(`Bienvenid@ a nuestra página de Sostenibilidad!! Le sugerimos registrarse.`);
               }
}})
   
       })
