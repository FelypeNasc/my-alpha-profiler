import { Router } from 'express';
import pg from 'pg';
import mw from '../middlewares/validate-token.js';

const router = Router();
const { Client } = pg;

router.delete('/', mw, async (req, res) => {
  
  console.log('DELETE ROUTE --> initiated');
 
  //-----------------------||-----------------------||-----------------------
  async function deleteUser(user) { 
    
    const client = new Client();
    
    try {
      if (user.isAuth) {
        let query = 'UPDATE public.users SET deleted = true WHERE username=$1';
        await client.connect();
        console.log('DELETE ROUTE --> connected do database');
        await client.query(query, [user.username]);
        await client.end();
        res.status(200).send('delete-success');
        console.log('DELETE ROUTE --> deleted username: '+ user.username);
      } else {
        res.status(401).send('delete-failure');
        console.log('DELETE ROUTE --> wrong acc/pwd on request');
      }
    } 
    
    catch (e) {
      await client.query('ROLLBACK');
      console.log('DELETE ROUTE --> error: ');
      console.log(e);
      await client.end();
      res.status(500).send('delete-failure');
    } 
    
    finally {
      console.log('DELETE ROUTE --> Fim da conexão');
    }

  }
  //-----------------------||-----------------------||-----------------------
  
  await deleteUser(req.user);
  console.log('DELETE ROUTE --> finishing call');

});

export default router;