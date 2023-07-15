import './App.css';
import Filtro from './components/Filtro'
import Saldo from './components/Saldo'
import Tabela from './components/Tabela';

function App() {
  return (
    <div className="App">
      <form className='formApp'>
        <div className='divForm'>
          <Filtro name="DataI" text="Data de Início" type="text"/>
          <Filtro name="DataF" text="Data de Fim" type="text"/>
          <Filtro name="NomeOperador" text="Nome do operado transacionado" type="text"/>
          <Filtro name="NumeroConta" text="Número da Conta" type="number"/>
        </div>
        <button className='btnPesquisa'>Pesquisar</button>
      </form>
      <div className='divApp'>
          <Tabela/>
        </div>
    </div>
  );
}

export default App;
