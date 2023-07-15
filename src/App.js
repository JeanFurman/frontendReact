import './App.css';
import { useEffect, useState } from 'react';
import Filtro from './components/Filtro'
import Tabela from './components/Tabela';

function App() {

  const [transferencias, setTransferencias] = useState([])
  const [dados, setDados] = useState([])

  const loadTransferencias = () => {
        fetch('http://localhost:8080/api/transferencias')
      .then((resp) =>  resp.json() )
      .then((data) => {
        setTransferencias(data)
        console.log(data)
      })
      .catch((err) => console.log(err))
  }

  const filtroTransferencias = (e) => {
    e.preventDefault()
    var url = 'http://localhost:8080/api/transferencias'

    if(dados.id){
      url += `/${dados.id}`
    }
    else{
      url += '?'
      if(dados.nome){
        url += `nome=${dados.nome}&`
      }
      if(dados.dataInicio && dados.dataFim){
        url += `dataInicio=${dados.dataInicio}&dataFim=${dados.dataFim}`
      }
    }

    fetch(url)
    .then((resp) =>  resp.json() )
    .then((data) => {
    setTransferencias(data)
    console.log(data)
    })
    .catch((err) => console.log(err))
  }

  const handleChange = (e) => {
    setDados({...dados, [e.target.name]: e.target.value})
  }


  useEffect(() => {
      loadTransferencias()
  }, [])

  return (
    <div className="App">
      <form onSubmit={filtroTransferencias} className='formApp'>
        <div className='divForm'>
          <Filtro name="dataInicio" text="Data de Início" type="text" handleOnChange={handleChange}/>
          <Filtro name="dataFim" text="Data de Fim" type="text" handleOnChange={handleChange}/>
          <Filtro name="nome" text="Nome do operado transacionado" type="text" handleOnChange={handleChange}/>
          <Filtro name="id" text="Número da Conta" type="number" handleOnChange={handleChange}/>
        </div>
        <button className='btnPesquisa'>Pesquisar</button>
      </form>
      <div className='divApp'>
          {transferencias.content !== undefined && transferencias.content.length > 0 ?
            <Tabela t={transferencias}/>
            : <></>}
          
        </div>
    </div>
  );
}

export default App;
