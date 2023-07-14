import styles from './Saldo.module.css'

export default function Saldo(){
    return (
        <div className={`${styles.saldo}`}>
          <p>Saldo total: R$50</p>
          <p>Saldo no período: R$50</p>
        </div>
    )
}
