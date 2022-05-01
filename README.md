# Projeto React

## Pré-requisitos:

#### - Node.js

#### - PM2

## Passo a passo:

#### 1 - Na pasta "frontend", execute o comando "npm install" onde serão baixadas as dependências.

#### 2 - Na pasta "backend", execute o comando "npm install" onde serão baixadas as dependências.

#### 3 - Na pasta raiz, execute o comando "pm2 start"

#### 4 - Acesse o navegador pela url: http://localhost:3000/

### 5 - Instale o dotenv usando: npm install dotenv --save




#### Delete route response codes:
##### 200 - delete succesful 
##### 401 - wrong username and/or password
##### 500 - server internal failure

#### front-end fetch template

>let response = await fetch ('/route', {
> method: 'METHOD',
>  body: JSON.stringify({
>
>  }),
>  headers: {
>    'content-type': 'application/json'
>  }
>})
>.then( resp => { return resp.text(); })
>.then ( res => { console.log('response: '); console.log(res); return res; })
>.catch( e => { console.log('fetch error: '); console.log(e); return null; } );
