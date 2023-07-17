import Saldo from './Saldo'
import styles from './Tabela.module.css'
import { useEffect, useState } from 'react';

export default function Tabela({t, pages}){

    const [transferencias, setTransferencias] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTransferencias(t)
    }, [t])

    const setPages = (e, valor) => {
        e.preventDefault()
        setCount(valor)
        pages(valor)
    }

    let buttons = null;
  
    if (transferencias !== undefined) {
        buttons = [];
      for (let index = 0; index < transferencias.totalPages; index++) {
        buttons.push(<buttons key={index+1} className={`${styles.buttonPage}`} disabled={count === (index) } style={count === (index) ? {color: '#e1e1e1'}: null} onClick={(e) => setPages(e, (index))}>{index+1}</buttons>);
      }
    }

    function formataData(dataT){
        const date = new Date(dataT);
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    }

    return (
        <div className={`${styles.divTabela}`}>
            {transferencias.content !== undefined ?
            <Saldo somaTotal={transferencias.somaTotal} somaPeriodo={transferencias.somaPeriodo}/>
            :<></>}
            <table className={`${styles.tabelaDados}`}>
            <thead>
                <tr>
                <th scope="col">Data</th>
                <th scope="col">Valencia</th>
                <th scope="col">Tipo</th>
                <th scope="col">Nome do operador transacionado</th>
                </tr>
            </thead>
            <tbody>
            
            {transferencias.content !== undefined && transferencias.content.length > 0 ?
             transferencias.content.map((t) => (
                <tr> 
                    <td>{formataData(t.dataTransferencia)}</td>
                    <td>R$ {t.valor}</td>
                    <td>{t.tipo}</td>
                    <td>{t.nomeOperadorTransacao}</td>
                </tr>
            )): <p>Não há transferências</p>}
                
            </tbody>    
            </table>
            <div className={`${styles.divPage}`}>
                
                <button disabled={count === 0 } style={count === 0 ? {color: '#e1e1e1'}: null} className={`${styles.buttonPage}`} onClick={(e) => setPages(e, 0)}>&lt;&lt;</button>
                <button disabled={count === 0 } style={count === 0 ? {color: '#e1e1e1'}: null} className={`${styles.buttonPage}`} onClick={(e) => setPages(e, (count-1))}>&lt;</button>
                {transferencias !== undefined ?
                <>
                {buttons}
                <button disabled={count === (transferencias.totalPages-1) } style={count === (transferencias.totalPages-1) ? {color: '#e1e1e1'}: null} className={`${styles.buttonPage}`} onClick={(e) => setPages(e, (count+1))}>&gt;</button>
                <button disabled={count === (transferencias.totalPages-1) } style={count === (transferencias.totalPages-1) ? {color: '#e1e1e1'}: null} 
                className={`${styles.buttonPage}`} onClick={(e) => setPages(e, (transferencias.totalPages-1))}>&gt;&gt;</button>
                </>: <></> 
                }
                
            </div>
        </div>
    )
}