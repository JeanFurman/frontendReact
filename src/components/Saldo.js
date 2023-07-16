import styles from './Saldo.module.css'

export default function Saldo({somaTotal, somaPeriodo}){
    return (
        <div className={`${styles.saldo}`}>
          <p>Saldo total: R${somaTotal}</p>
          <p>Saldo no período: R${somaPeriodo}</p>
        </div>
    )
}
