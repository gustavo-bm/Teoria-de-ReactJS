import styles from './Frase.module.css'

function Frase() {
    return (
        <div className={styles.fraseContainer} >
            <p className={styles.fraseContent} >Esse é um componente com uma frase, sendo alterado com CSS Modules!</p>
        </div>
    )
}

export default Frase
// nome do arquivo = nome da função exportada