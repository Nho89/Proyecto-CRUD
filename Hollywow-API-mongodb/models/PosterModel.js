import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js';

export const Poster = connection_db.define('Poster', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
  ,
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
        tableName: 'posters', // Nombre de la tabla en la base de datos
        timestamps: false, // Disable timestamps
      }
);

  export default Poster;
