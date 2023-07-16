import './App.css';
import { useEffect, useState } from 'react';
import Filtro from './components/Filtro'
import Tabela from './components/Tabela';

function App() {

  const [transferencias, setTransferencias] = useState([])
  const [dados, setDados] = useState([])
  var [url, setUrl] = useState('')

  const loadTransferencias = (urlParam) => {
      let u = ''
      if(url !== ''){
        u = url
      }else{
        u=urlParam
      }
      fetch(u)
      .then((resp) =>  resp.json() )
      .then((data) => {
        setTransferencias(data)
      })
      .catch((err) => console.log(err))
  }

  const filtroTransferencias = (e) => {
    e.preventDefault()
    setUrl('http://localhost:8080/api/transferencias')

    if(dados.id){
      url += `/${dados.id}`
    }
    else{
      url += '?'
      if(dados.nome){
        url += `nome=${dados.nome}&`
      }
      if(dados.dataInicio && dados.dataFim){
        url += `dataInicio=${dados.dataInicio}&dataFim=${dados.dataFim}&`
      }
    }
    loadTransferencias()
  }

  function pages(p){
    let regexPage = new RegExp('/page=/')
    if(!regexPage.test(url)){
      let regexUrl = new RegExp('/&$/')
      if(regexUrl.test(url)){
        url += `page=${p}&`
      }else{
        url += `?page=${p}&`
      }
    }else{
      url = url.replace('/(page=)\d+/', `$${p}`)
    }
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
