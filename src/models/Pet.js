import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Owner } from "./Owner.js";

export const Pet = sequelize.define("Pet", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    species: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER
    }
});

// Relationship (Owner 1 ---- N Pets)
Owner.hasMany(Pet, { foreignKey: "ownerId" });
Pet.belongsTo(Owner, { foreignKey: "ownerId" });
