import mongoose from "mongoose"

export const connect = async () =>{

    const DB_URI = process.env.DB_URI;
        try {
          await mongoose.connect( DB_URI );
          console.log("data base connected");
        } catch (error) {
          console.error(error);
          console.log('error conection')
        }
      };


/* const connect = async()=>{
  try {
    const db = await mongoose.connect(DB_CONNECTION_STRING);
    const{name, host} = db.connection;
    console.log(`DB name: ${name}, host : ${host}`)
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
}

export default connect; */




/* import {Sequelize} from "sequelize";
import { DB_DEV_NAME, DB_USER, DB_PASSWORD, DB_TEST_NAME, NODE_ENV } from '../config.js';

const DB_NAME = NODE_ENV === 'test' ? DB_TEST_NAME : DB_DEV_NAME;//Escoge nuestra conexión.

const connection_db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

export default connection_db; */