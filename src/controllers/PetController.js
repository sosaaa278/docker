import { Pet } from "../models/Pet.js";
import { Owner } from "../models/owner.js";

export const createPet = async (req, res) => {
    try {
        const pet = await Pet.create(req.body);
        res.json({ message: "Pet created", data: pet });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPets = async (req, res) => {
    try {
        const pets = await Pet.findAll({ include: Owner });
        res.json(pets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
