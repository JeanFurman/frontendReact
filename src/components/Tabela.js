import Saldo from './Saldo'
import styles from './Tabela.module.css'

export default function Tabela(){
    return (
        <div className={`${styles.divTabela}`}>
            <Saldo/>
            <table className={`${styles.tabelaDados}`}>
            <thead>
                <tr>
                <th scope="col">Dados</th>
                <th scope="col">Valencia</th>
                <th scope="col">Tipo</th>
                <th scope="col">Nome do operador transacionado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>cas jnascnascjnsacjncasjncsajnscajnsaccas jnascnascjnsacjncasjncsajnscajnsac</td>
                    <td>Ottocas jnascnascjnsacjncasjncsajnscajnsaccas jnascnascjnsacjncasjncsajnscajnsac</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
            </tbody>    
            </table>
        </div>
    )
}