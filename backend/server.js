import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import auth from './routes/auth';
import register from './routes/register';

const app = express();
const port = 3001;

// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/auth', auth);
app.use('/register', register);

app.listen(port, () => console.log(`Server started on port ${port}`));
