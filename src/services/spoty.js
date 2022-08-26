//consumiendo APIS

//1. PARA DONDE VOY
const URI="https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9/top-tracks?market=US"

//configurar la petición

const PETICION={
    method: "GET",
    headers: {
        Authorization: "Bearer BQCNKMkXSt_4aq4EuYAi6XmsDI4xP2JOPQWFe0jc6c2UndHLcEdjGV3JJWSTUeCkmZ0UoPL2s7Ad7rUqg2moByTHeTzIB6HvUru1RD4IGMvd2lHJgHP7LkK23740S6N6N8GZD0tVH6TkqU1-qtP_0HStBWzOcglIPKUP3qtRgQkw37kq_CM"
    }
}

//3. arranca pues

//consumo el API

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()   
})
.then(function(respuesta){
    
    console.log(respuesta)
    console.log(respuesta.tracks)
    let fila= document.getElementById('fila')
    
    respuesta.tracks.forEach(function(cancion){
       
        let columna = document.createElement('div')
        columna.classList.add('col')

        let tarjeta = document.createElement('div')
        tarjeta.classList.add('card','shadow','p-3','h-100')

        let audio =document.createElement('audio')
        audio.src= cancion.preview_url
        audio.classList.add("w-100")
        audio.setAttribute('controls','controls')

        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent=cancion.name

        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid", "w-100")
        imagen.src=cancion.album.images[0].url

        tarjeta.appendChild(nombre)
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)


    })

})
.catch(function(error){
    console.log(error)
})


