const { Router } = require("express") //usou { } para tirar uma parte do pacote
const UsuarioController = require("../controllers/UsuarioController")
// const AtendimentoController = require("../controllers/AtendimentoController")

const router = Router()

router.get("/user/index", (req,res) => UsuarioController.index(req,res))
router.post("/user/create", (req,res) => UsuarioController.usuarioPostAsync(req,res)) // recebe os dados do formulário
router.get("/user/create", (req,res) => UsuarioController.usuarioCreateView(req,res)) //manda o formulário que o usuário terá que preencher
router.put("/user/edit", (req,res) => UsuarioController.usuarioPutAsync(req,res))
router.get("/user/edit/:id", (req,res) => UsuarioController.usuarioEditView(req,res))
router.get("/user/list", (req,res) => UsuarioController.usuarioListView(req,res))
router.delete("/user/delete/:id", (req,res) => UsuarioController.usuarioDeleteAsync(req,res))

//Atendimentos
// router.get("/listar", AtendimentoController.listar) // -> lista
// router.get("/cadastrar", AtendimentoController.cadastrarView) // -> cadastra atendimento e salva
// router.post("/cadastrar", AtendimentoController.cadastrar)
// router.get("/atualizar", AtendimentoController.atualizarView) // -> atualiza atendimento e salva
// router.post("/atualizar", AtendimentoController.atualizar)
// router.post("/excluir", AtendimentoController.excluir) // -> excluir atendimento

module.exports = router