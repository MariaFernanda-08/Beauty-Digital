const express = require('express')

class Server{ //toda class tem inicial maiuscula

    app 
    port

    constructor(port){ // é chamado primeiro e obriga o preenchimento dos atributos
        this.app = express() //armazenou o express dentro do app - inicializando ele, para utiiza-lo com funções
        this.port = port
    }        

    listen(){
        this.app.listen(this.port,() => {
            console.log("Servidor Online...")
        })
    }

}

module.exports = new Server(3001) // transfere a classe p/ outro arquivo, evita q eu crie outra 