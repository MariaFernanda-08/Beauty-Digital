const server = require("./server") //exporta o que é para ser exportado do outro arquivo, ai consigo usar oq tem dentro dele tbm

server.port = 8080
server.listen()