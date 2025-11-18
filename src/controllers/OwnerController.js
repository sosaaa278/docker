import { Owner } from "../models/Owner.js";

export const createOwner = async (req, res) => {
    try {
        const owner = await Owner.create(req.body);
        res.json({ message: "Owner created", data: owner });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getOwners = async (req, res) => {
    try {
        const owners = await Owner.findAll();
        res.json(owners);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
