const { Router } = require("express") //usou { } para tirar uma parte do pacote
const UsuarioController = require("../controllers/UsuarioController")
const AtendimentoController = require("../controllers/AtendimentoController")

const router = Router()

// Usuário
router.get("/user/index", UsuarioController.index)

//Atendimentos
router.get("/listar", AtendimentoController.listar) // -> lista
router.get("/cadastrar", AtendimentoController.cadastrarView) // -> cadastra atendimento e salva
router.post("/cadastrar", AtendimentoController.cadastrar)
router.get("/atualizar", AtendimentoController.atualizarView) // -> atualiza atendimento e salva
router.post("/atualizar", AtendimentoController.atualizar)
router.post("/excluir", AtendimentoController.excluir) // -> excluir atendimento

module.exports = router