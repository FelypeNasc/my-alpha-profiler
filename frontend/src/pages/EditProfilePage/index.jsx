import {
  PositiveButton,
  NegativeButton,
} from "../../components/exporterOfComponents";

import "./style.css";

function App() {
  return (
    <>
      <h1>Edit Profile page</h1>
      <NegativeButton path="/" label="Voltar pra home" />
      <NegativeButton path="/" label="Excluir conta" />
      <PositiveButton path="/" label="Salvar alterações" />
    </>
  );
}

export default App;
