// Renderização Condicional
import styles from './Concicional.module.css'
import { useState } from 'react'

function Condicional() {

    const [email, setEmail] = useState() //desestruturação de arrays do JavaScript
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        console.log('E-mail enviado.')
        setUserEmail(email) // userEmail = email
    }

    function limparEmail(e) {
        setUserEmail('') // vazio, para gerar um falsy na linha 34
    } 

    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Digite o seu e-mail:"
                    onChange={(e) => setEmail(e.target.value)}
                    // caractere a caractere, o email torna-se o que o usuario escreve
                />
                <button 
                    type="submit" 
                    onClick={enviarEmail}>Enviar e-mail
                </button>
                {userEmail && (
                    <div className={styles.mensagem} >
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                ) // como se fosse um bloco de if
                } 
            </form>
        </div>
    )
}

export default Condicional