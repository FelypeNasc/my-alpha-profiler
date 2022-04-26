import {PositiveButton, UserInput} from '../../components/exporterOfComponents'
import {NavLink} from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login page</h1>
      <UserInput type="text" placeholder="Email" /> <br/>
      <UserInput type="password" placeholder="Senha" /> <br/>
      <PositiveButton path='/home' label='Entrar' />
      <br/>
      <NavLink to='/signup'>Inscrever-se</NavLink>
    </div>
  );
}

export default Login;