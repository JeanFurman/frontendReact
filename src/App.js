import './App.css';
import Filtro from './components/Filtro'

function App() {
  return (
    <div className="App">
      <form className='formApp'>
        <div className='divForm'>
          <Filtro name="DataI" text="Data de Início" type="text"/>
          <Filtro name="DataF" text="Data de Fim" type="text"/>
          <Filtro name="NomeOperador" text="Nome do Operador" type="text"/>
          <Filtro name="NumeroConta" text="Número da Conta" type="number"/>
        </div>
        <button className='btnPesquisa'>Pesquisar</button>
      </form>
    </div>
  );
}

export default App;
