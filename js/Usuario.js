/*INICIO DE SESION*/ 




window.addEventListener('load', function(){

    let dbUsuarios= JSON.parse(localStorage.getItem('usuarios')) 
   
    let formulario = document.getElementById('form-InicioSesion');
       let inputEmail= document.querySelector('#email');
       let inputContraseña = document.querySelector('#password');
    let divContenido = document.querySelector('#divContenidoSesion');
   
       formulario.addEventListener('submit', function(event){
   
           event.preventDefault();
   
           let errores = [];
           let usuarioEncontrado= false;
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
            //Esto limpia el div donde se colocan las respuestas, al eliminar los nodos hijos del elemento
            while (divContenido.firstChild) {
               divContenido. removeChild(divContenido.firstChild);
           }
   
           if (errores.length > 0) {
               let ulErrores = document.createElement('ul');
               for(let i = 0; i < errores.length; i++){
                   ulErrores.innerHTML += `<li> ${errores[i]} </li>`
               }
               divContenido.appendChild(ulErrores);
           } else {
               if(usuarioEncontrado === true){
                   let mensajeDeBienvenida = document.createElement('p5');
                   sessionStorage.setItem('usuario', nombreDelUsuario);
                   mensajeDeBienvenida.innerHTML = `Bienvenid@ ${sessionStorage.getItem('usuario')} a nuestra página de Sostenibilidad en Rio Grande`;
                   divContenido.appendChild(mensajeDeBienvenida);
               }

               dbUsuarios.push(usuario)
 
               localStorage.setItem('usuarios', JSON.stringify(dbUsuarios));
               sessionStorage.setItem('usuario', inputName.value);

               if(usuarioEncontrado === false){
                   alert(`Bienvenid@ a nuestra página!! Le sugerimos registrarse.`);
               }
           }
   
       })
   })