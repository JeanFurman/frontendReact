import './App.css';
import { useEffect, useState } from 'react';
import Filtro from './components/Filtro'
import Tabela from './components/Tabela';

function App() {

  const [transferencias, setTransferencias] = useState([])
  const [dados, setDados] = useState([])
  var [url, setUrl] = useState('')

  const loadTransferencias = (u) => {
      if(url !== ''){
        u = url
      }
      console.log("url load -- " + url)
      fetch(u)
      .then((resp) =>  resp.json() )
      .then((data) => {
        setTransferencias(data)
      })
      .catch((err) => console.log(err))
  }

  const filtroTransferencias = (e) => {
    e.preventDefault()
    var u = 'http://localhost:8080/api/transferencias'

    if(dados.id){
      u += `/${dados.id}`
    }
    else{
      u += '?'
      if(dados.nome){
        u += `nome=${dados.nome}&`
      }
      if(dados.dataInicio && dados.dataFim){
        u += `dataInicio=${dados.dataInicio}&dataFim=${dados.dataFim}&`
      }
    }
    setUrl(u)
    fetch(u)
      .then((resp) =>  resp.json() )
      .then((data) => {
        setTransferencias(data)
        console.log(data)
      })
      .catch((err) => console.log(err))
  }

  function pages(p){
    if(!url.includes('page')){
      if(url.endsWith('&')){
        console.log('entrei')
        url += `page=${p}&`
      }else{
        url += `?page=${p}&`
      }
    }else{
      url = url.replace(/(page=)\d+/, `$1${p}`)
    }
    setUrl(url)
    loadTransferencias()
  }

  const handleChange = (e) => {
    setDados({...dados, [e.target.name]: e.target.value})
  }


  useEffect(() => {
    loadTransferencias('http://localhost:8080/api/transferencias')
    setUrl('http://localhost:8080/api/transferencias')
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
            <Tabela t={transferencias} pages={pages}/>
            : <></>}
          
        </div>
    </div>
  );
}

export default App;
