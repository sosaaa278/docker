import { Appointment } from "../models/Appointment.js";
import { Pet } from "../models/Pet.js";

export const createAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.create(req.body);
        res.json({ message: "Appointment created", data: appointment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll({ include: Pet });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
