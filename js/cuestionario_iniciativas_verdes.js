var imagenes = [
    '../img/photo_2022-05-31_12-36-46.jpg',
    '../img/rio-grande-entrega-plantines-3.JPG',
    '../img/photo_5026172842806454979_y.jpg',
    '../img/multimedia.normal.8e0e6e83f2b88c10.494d475f32303232303831325f3036353333355f3333345f6e6f726d616c2e6a7067.jpg',
    '../img/photo1643913589.jpg',
    '../img/photo1681417135-1-800x445.jpeg'
];

var i = 0;
var imagen_actual = document.getElementById('imagen-actual');

const cambiarImagen = () => {
    i++; 
    if (i >= imagenes.length) {
        i = 0; 
    }
    imagen_actual.src = imagenes[i]; 
}

// muestra la primera imagen sin necesidad clickear el boton
imagen_actual.src = imagenes[i];
