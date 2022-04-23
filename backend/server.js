// config
import express from 'express';

// middlewares

// routes
import auth from './routes/auth';
import register from './routes/register';
import edit from './routes/edit';
import deleteUser from './routes/delete';

const app = express();
const port = 3001;

app.use('/auth', auth);
app.use('/register', register);
app.use('/edit', edit);
app.use('/deleteUser', deleteUser);

app.listen(port, () => console.log(`Server started on port ${port}`));
