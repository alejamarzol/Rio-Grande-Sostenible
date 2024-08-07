window.addEventListener('load', function(){

dbUsuarios = [
    {
        nombre: 'Natalia',
        email: 'bilic.arq@gmail.com',
        password: 123456},
   
    {   nombre: 'Alejandra',
        email: 'marzolalejandra@gmail.com',
        password: 123456},


     {   nombre: 'Mariana',
        email: 'aburtom709@gmail.com',
        password: 123456},
];

localStorage.setItem('usuarios', JSON.stringify(dbUsuarios));

const user = sessionStorage.getItem('usuario');

})


