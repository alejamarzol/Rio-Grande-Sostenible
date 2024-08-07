window.addEventListener(`load`, ()=>{
    let lon
    let lat
    if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(posicion =>{
        //console.log(posicion.coords.latitude)
        lon = posicion.coords.longitude
        lat = posicion.coords.longitude
        //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8d9d9825b5930cc6d88546d5da569dee`
     //console.log(url)
     const url = `https://api.openweathermap.org/data/2.5/weather?q=RioGrande&lang=es&units=metric&appid=8d9d9825b5930cc6d88546d5da569dee`
     console.log(url)
    })   
    }
})