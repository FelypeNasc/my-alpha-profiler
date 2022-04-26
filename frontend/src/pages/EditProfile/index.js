import {PositiveButton, NegativeButton} from '../../components/exporterOfComponents'

function App() {
  return (
    <>
      <h1>Edit Profile page</h1>
      <NegativeButton path='/home' label='Voltar pra home' />
      <PositiveButton path='/home' label='Salvar alterações' />
    </>
  );
}

export default App;