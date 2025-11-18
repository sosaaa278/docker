const express = require("express");
const router = express.Router();

const Owner = require("../models/Owner");

// ➤ GET – obtener todos los owners
router.get("/", async (req, res) => {
    try {
        const owners = await Owner.findAll();
        res.json(owners);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener owners", details: err });
    }
});

// ➤ POST – crear un nuevo owner
router.post("/", async (req, res) => {
    try {
        const { name, phone } = req.body;

        const newOwner = await Owner.create({ name, phone });

        res.json({
            message: "Owner creado correctamente",
            owner: newOwner
        });

    } catch (err) {
        res.status(500).json({ error: "Error al crear owner", details: err });
    }
});

// PUT — actualizar un owner por ID
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;       // ID tomado de la URL
        const { name, phone } = req.body; // Datos nuevos

        const owner = await Owner.findByPk(id);

        if (!owner) {
            return res.status(404).json({ message: "Owner no encontrado" });
        }

        await owner.update({ name, phone });

        res.json({
            message: "Owner actualizado correctamente",
            owner
        });

    } catch (error) {
        res.status(500).json({
            error: "Error al actualizar owner",
            details: error
        });
    }
});


//DELETE — eliminar un owner por ID
router.delete("/:id", async (req, res) => {
    try {
        const deleted = await Owner.destroy({
            where: { id: req.params.id }
        });

        if (deleted === 0) {
            return res.status(404).json({ message: "Owner no encontrado" });
        }

        res.json({ message: "Owner eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;
