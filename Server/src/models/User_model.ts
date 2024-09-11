import { DataTypes, Model } from "sequelize";
import ProductModel from './Product_model.ts'; 
import sequelize from "../db/db.ts"; 

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("cliente", "vendedor", "admin"),
    defaultValue: "cliente",
  }
}, {
  modelName: "User",
  timestamps: true,
  sequelize,
});

export default User;
