import 'dotenv/config';
import {PORT} from "./config.js"
import {connect} from "./database/connection_db.js";
import Poster from "./models/PosterModel.js"
import express from  "express";
import PosterRouter from "./routes/PosterRouter.js";
import cors from 'cors';

export const app = express();

app.use(express.json());
app.use('/api' , PosterRouter);
app.use(cors());

connect();
const PORT = process.env.PORT || 8000
/* try {
    await connection_db.authenticate();
    console.log('✅ Connection has been established successfully.');
    await Poster.sync();
    console.log(`synchronized successfully`)
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  } */

 app.listen(PORT, ()=> {
    console.log(`tu app esta lista por http://localhost:${PORT}`)
})
