import Saldo from './Saldo'
import styles from './Tabela.module.css'
import { useEffect, useState } from 'react';

export default function Tabela({t}){

    const [transferencias, setTransferencias] = useState([])

    useEffect(() => {
        setTransferencias(t)
    }, [t])

    return (
        <div className={`${styles.divTabela}`}>
            {transferencias.content !== undefined ?
            <Saldo/>
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
                    <td>{t.dataTransferencia}</td>
                    <td>{t.valor}</td>
                    <td>{t.tipo}</td>
                    <td>{t.nomeOperadorTransacao}</td>
                </tr>
            )): <p>Não há transferências</p>}
                
            </tbody>    
            </table>
        </div>
    )
}