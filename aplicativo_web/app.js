const server = require("./server") //exporta o que é para ser exportado do outro arquivo, ai consigo usar oq tem dentro dele tbm
const sequelize = require('./database/dbconfig')
const Usuario = require('./schemas/UsuarioSchema')
const Atendimento = require('./schemas/AtendimentoSchema')

async function run(){
    const port = 8080
    
    try{
        Usuario.hasMany(Atendimento,{
            foreignKey: "usuarioId",
            as: "atendimentos"
        })

        Atendimento.belongsTo(Usuario, {
            foreignKey:"usuarioId",
            as: "users"
        })
        
        await sequelize.authenticate()
        console.log('Conexão com o banco realizada com sucesso!')

        await sequelize.sync({force:true}) 
        console.log('Modelos sincronizados.')

        server.port = port;
        server.listen();

    } catch(error){
        console.error('Erro ao iniciar a aplicação', error);
    }
}

run();