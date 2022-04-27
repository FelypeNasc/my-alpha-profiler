import {
  PositiveButton,
  NegativeButton,
  UserInput,
  InputWithLabel,
} from "../../components/exporterOfComponents";

import "./style.css";

function App() {
  return (
    <>
      <h1>Sign up page</h1>
      <UserInput type="text" placeholder="Nome" />
      <InputWithLabel type="date" label="Data de nascimento" />
      <UserInput type="text" placeholder="Email" /> <br />
      <UserInput type="password" placeholder="Crie uma senha" /> <br />
      <NegativeButton path="/" label="Voltar" />
      <PositiveButton path="/" label="Registrar" />
    </>
  );
}

export default App;
