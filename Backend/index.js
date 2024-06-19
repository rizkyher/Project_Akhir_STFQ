import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import db from './config/Database.js';
import cookieParser from 'cookie-parser';
import router from './routes/index.js';

dotenv.config();
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

try {
    await db.authenticate();
    await db.sync();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(router)

app.listen(3007, () => console.log('Server running on port 3007'))

