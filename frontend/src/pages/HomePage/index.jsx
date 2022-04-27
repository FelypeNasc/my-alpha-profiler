import {
  PositiveButton,
  NegativeButton,
} from "../../components/exporterOfComponents";

import "./style.css";

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <NegativeButton path="/" label="Sair" />
      <PositiveButton path="/edit-profile" label="Editar perfil" />
    </div>
  );
}

export default Home;
