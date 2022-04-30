import { Router } from 'express';
import pg from 'pg';
const router = Router();
const { Client } = pg;

router.get('/', async (req, res) => {
  let query;
  let conexao = false;
  let table = req.query.table;
  let id = req.query.id;
  console.log(table, id);
  switch (table) {
    case 'id':
      if (isNaN(id) || id < 1) {
        res.send('pesquisa inválida');
        return false;
      }
      conexao = true;
      query = `SELECT * FROM public.vw_usuarios WHERE ${table} = ${id} AND deleted IS NOT TRUE`;
      break;
    case 'username':
      conexao = true;
      query = `SELECT * FROM public.vw_usuarios WHERE ${table} = '${id}' AND deleted IS NOT TRUE`;
      break;
    case 'email':
      conexao = true;
      query = `SELECT * FROM public.vw_usuarios WHERE ${table} = '${id}' AND deleted IS NOT TRUE`;
      break;
    default:
      conexao = false;
  }

  if (conexao) {
    connectGet(query);
  } else {
    res.send('pesquisa inválida');
    return false;
  }

  async function connectGet(myquery) {
    const client = new Client();
    await client.connect().then(() => console.log('conectado ao banco'));
    console.log(myquery);
    await client
      .query(myquery)
      .then((results) => {
        res.send(results.rows);
      })
      .catch((e) => console.log(e))
      .finally(() => client.end(), console.log('cliente fechado'));
  }
});

export default router;
