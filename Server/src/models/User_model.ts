import { DataTypes, Model } from "sequelize";
import sequelize from "../db/db"; 
import {user} from "../interfaces/user_interfaces"

class User extends Model{}


// class User extends Model <user> implements user{
//   public id!:number
//   public username!: string;
//   public email!: string;
//   public password!: string;
//   public role!: "user" | "admin";
// }

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
    type: DataTypes.ENUM("cliente","admin"),
    defaultValue: "cliente",
  }
}, {
  modelName: "User",
  timestamps: true,
  sequelize,
});

export default User;
