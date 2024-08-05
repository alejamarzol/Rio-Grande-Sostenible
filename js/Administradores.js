let dbUsuarios = [
    {
        nombre: 'Natalia',
        email: 'bilic.arq@gmail.com',
        password: 123456
    }
];

localStorage.setItem('usuarios', JSON.stringify(dbUsuarios));

const user = sessionStorage.getItem('usuario');




