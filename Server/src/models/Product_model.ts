import { DataTypes, Model } from "sequelize";
import sequelize from "../db/db"; 
import {ProductAttributes} from "../interfaces/product_interface"


class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id!: number;
  public nombre!: string;
  public descripcion?: string;
  public categoria?: string;
  public precio!: number;
  public cantidad_stock?: number;
  public proveedor?: string;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init({
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  categoria: {
    type: DataTypes.STRING,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  cantidad_stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  proveedor: {
    type: DataTypes.STRING,
  },
}, {
  modelName: "Product",
  timestamps: true,
  sequelize,
});

export default Product;
