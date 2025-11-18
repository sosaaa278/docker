import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Pet } from "./Pet.js";

export const Appointment = sequelize.define("Appointment", {
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    }
});

// Relationship (Pet 1 ---- N Appointments)
Pet.hasMany(Appointment, { foreignKey: "petId" });
Appointment.belongsTo(Pet, { foreignKey: "petId" });
