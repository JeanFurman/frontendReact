import styles from './Filtro.module.css'

export default function Filtro({name, text, type}){
    return (
        <div className={`${styles.formData}`}>
            <label htmlFor={name} className={`${styles.formLabel}`}>{text}</label>
            <input type={type} name={name} className={`${styles.formInput}`}/>
        </div>
    )
}