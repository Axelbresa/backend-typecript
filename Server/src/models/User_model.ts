import { DataTypes, Model } from "sequelize";
import {getSequelizeInstance} from "../db/db"; 
import {user} from "../interfaces/user_interfaces"
import Product from "./Product_model";

class User extends Model <user> implements user{
  public id!:number
  public username!: string;
  public email!: string;
  public password!: string;
  public role!: "user" | "admin";
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Asegúrate de que esté definido como clave primaria
    autoIncrement: true, // Para que Sequelize lo autogenere
  },
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
    type: DataTypes.ENUM("user","admin"),
    defaultValue: "user",
  }
}, {
  modelName: "User",
  timestamps: true,
  sequelize:getSequelizeInstance(),
});

// Relación uno a muchos
User.hasMany(Product, {
  foreignKey: 'userId',
  as: 'productos', 
});

Product.belongsTo(User, {
  foreignKey: 'userId',
  as: 'usuario', 
});


export default User;
