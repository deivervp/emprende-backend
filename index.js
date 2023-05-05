const http = require("http")

function requestController() {
    //Logica de la función
    console.log("recibimos una nueva request!!")
}

//Configuracion del servidor
const server = http.createServer(requestController)

server.listen(4000)
