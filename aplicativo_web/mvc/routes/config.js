const { Router } = require("express") //usou { } para tirar uma parte do pacote
const UsuarioController = require("../controllers/UsuarioController")

const router = Router()

router.get("/user/index", UsuarioController.index)

module.exports = router