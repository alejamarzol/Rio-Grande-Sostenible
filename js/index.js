window.addEventListener(`load`, ()=>{
    let lon
    let lat

    let temperaturaValor = document.getElementById (`temperatura-valor`)
    let temperaturaDescripcion = document.getElementById (`temperatura-descripcion`)

   

    if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(posicion =>{
        //console.log(posicion.coords.latitude)
        lon = posicion.coords.longitude
        lat = posicion.coords.longitude
       // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8d9d9825b5930cc6d88546d5da569dee`
     //console.log(url)
     const url = `https://api.openweathermap.org/data/2.5/weather?q=ushuaia&appid=8d9d9825b5930cc6d88546d5da569dee`
     console.log(url)
    fetch (url)
.then ((response) => { return response.json () })
 .then ((data) =>{
    
    let temp = Math.round(data.main.temp)
    temperaturaValor.textContent = `${temp} °C `
    
    let desc = data.weather [ 0].descripcion
    temperaturaDescripcion.textContent= desc.toUpperCase ()
    
    


 })   
    .catch(error =>{
        console.log(error)
    })
})
}

})   



