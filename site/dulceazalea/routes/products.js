const express = require("express");
const router = express.Router();

const controller = require("../controllers/productsController")

router.get("/:d?", controller.listar)//1)Listado de productos/3)Detalle de un producto en particular
router.get("/create") //2)Formulario de creación de productos
router.post("/")//4)Acción de creación (a dónde se envía el formulario)
router.get("/:id/edit")//5)Formulario de edición de productos
router.put("/:id")//6)Acción de edición (a dónde se envía el formulario)
router.delete("/:id")//7)Acción de borrado

module.exports = router