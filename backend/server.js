import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import auth from './routes/auth';
import register from './routes/register';
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

app.listen(port, () => console.log(`Server started on port ${port}`));
