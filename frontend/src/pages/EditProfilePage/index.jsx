import {
  PositiveButton,
  NegativeButton,
} from "../../components/exporterOfComponents";

import "./style.css";

function App() {
  return (
    <>
      <h1>Edit Profile page</h1>
      <NegativeButton path="/home" label="Voltar pra home" />
      <NegativeButton path="/home" label="Excluir conta" />
      <PositiveButton path="/home" label="Salvar alterações" />
    </>
  );
}

export default App;
