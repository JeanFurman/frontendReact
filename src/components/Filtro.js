import styles from './Filtro.module.css'

export default function Filtro({name, text, type, handleOnChange}){
    return (
        <div className={`${styles.formData}`}>
            <label htmlFor={name} className={`${styles.formLabel}`}>{text}</label>
            <input type={type} name={name} onChange={handleOnChange} className={`${styles.formInput}`}/>
        </div>
    )
}