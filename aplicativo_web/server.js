const express = require('express')
const router = require('./mvc/routes/config') // as rotas estarão dentro do router

class Server{ //toda class tem inicial maiuscula

    app 
    port

    constructor(port){ // é chamado primeiro e obriga o preenchimento dos atributos
        this.app = express() //armazenou o express dentro do app - inicializando ele, para utiiza-lo com funções
        this.port = port

        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))

        this.app.use(router)
        this.app.set("view engine", "ejs")
        this.app.set("views", "mvc/views")
    }        

    listen(){
        this.app.listen(this.port,() => {
            console.log("Servidor Online...")
        })
    }

}

module.exports = new Server(3001) // transfere a classe p/ outro arquivo, evita q eu crie outra 