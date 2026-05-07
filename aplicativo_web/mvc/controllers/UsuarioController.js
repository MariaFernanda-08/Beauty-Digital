const UsuarioService = require('../../services/UsuarioService')

class UsuarioController{
    
    constructor(){
        this.UsuarioService = new UsuarioService()
    }

    async index(req,res){
        const usuarios = await this.UsuarioService.buscarUsuario(req.params.id)
        res.render("Usuario/UsuarioView", {usuarios})
    }

    async usuarioListView(req,res){
        const usuarios = await this.UsuarioService.buscarTodosUsuarios()
        res.render("Usuario/ListView", {usuarios: usuarios})
    }

    usuarioCreateView(req,res){
        res.render("Usuario/CreateView")
    }

    async usuarioEditView(req,res){
        const usuario = await this.UsuarioService.buscarUsuario(req.params.id)
        res.render("Usuario/EditView", {usuario: usuario})
    }

    async usuarioPostAsync(req,res){
        const id = await this.UsuarioService.cadastrarUsuario(
            req.body.username,
            req.body.email,
            req.body.senha    
        )  
        
        res.json({id:id})
    }

    async usuarioPutAsync(req,res){
        const affectedRows = await this.UsuarioService.atualizarUsuario(
            req.body.id,
            req.body.username,
            req.body.email,
            req.body.senha    
        )  
        
        res.json({affectedRows: affectedRows})
    }
    
    async usuarioDeleteAsync(req,res){
        const affectedRows = await this.UsuarioService.deletarUsuario(req.params.id)
        
        res.json({affectedRows: affectedRows})
    }
}

module.exports = new UsuarioController()