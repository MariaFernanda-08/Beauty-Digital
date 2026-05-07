const server = require("./server") //exporta o que é para ser exportado do outro arquivo, ai consigo usar oq tem dentro dele tbm
const sequelize = require('./database/dbconfig')

async function run(){
    const port = 8080
    
    try{
        await sequelize.authenticate()
        console.log('Conexão com o banco realizada com sucesso!')

        await sequelize.sync({alter:true}) 
        console.log('Modelos sincronizados.')

        server.port = port;
        server.listen();

    } catch(error){
        console.error('Erro ao iniciar a aplicação', error);
    }
}

run();