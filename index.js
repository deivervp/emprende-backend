require("dotenv").config()
const http = require("http")

function requestController() {
    //Logica de la función
    console.log("Recibimos una nueva request!!!")
}

//Configuracion del servidor
const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(4000, function () {
    console.log( "Aplicación corriendo en puerto " + PORT )
})
