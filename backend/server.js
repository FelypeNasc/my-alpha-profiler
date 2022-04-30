<<<<<<< HEAD
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import auth from './routes/auth.js';
import register from './routes/register.js';
import deleteUser from './routes/delete.js';
import viewRoute from './routes/view.js';

const app = express();
const port = 3001;

// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/auth', auth);
app.use('/register', register);
app.use('/delete', deleteUser);
app.use('/view', viewRoute);
=======
// config
import express from "express";
const app = express();
const port = 3001;
import "dotenv/config";

// middlewares

// routes
/* import auth from "./routes/auth";
import register from "./routes/register";
import edit from "./routes/edit";*/
import deleteU from "./routes/delete.js";
import view from "./routes/view.js";
const viewRoute = view;
const deleteUser = deleteU;

/* app.use("/auth", auth);
app.use("/register", register);
app.use("/edit", edit);*/
app.use("/delete", deleteUser);
app.use("/view", viewRoute);
>>>>>>> 4d315c59cc53129436288e792ba5b9d31fe902ff

app.listen(port, () => console.log(`Server started on port ${port}`));
