import { Router } from 'express';
import pg from 'pg';
import validateToken from '../middlewares/validate-token.js';
import bcrypt from 'bcrypt';
const saltRounds = 12;
const router = Router();
const { Client } = pg;

router.put('/', validateToken, async (req, res) => {
  const client = new Client();
  const { data } = req.body;

  if (data.password) {
    const hash = bcrypt.hashSync(data.password, saltRounds);
    data.password = hash;
  }

  const updates = [];
  Object.entries(data).forEach((entry, index, array) => {
    if (index === array.length - 1) {
      updates.push(` ${entry[0]}='${entry[1]}' `);
    } else {
      updates.push(` ${entry[0]}='${entry[1]}'`);
    }
  });

  try {
    await client.connect();
    const queryInsert = `UPDATE public.users SET ${updates.join()} WHERE username=$1;`;
    const values = [data.username];

    await client.query(queryInsert, values);
  } catch (error) {
    console.error(error);
    await client.query('ROLLBACK');
    res.send('Problemas ocorreram, Rollback realizado');
  } finally {
    res.send('Dados atualizados');
    await client.end();
  }
});

export default router;
