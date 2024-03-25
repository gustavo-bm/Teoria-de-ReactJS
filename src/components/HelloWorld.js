import Frase from './Frase'

import styles from './HelloWorld.module.css'
// é assim que se importa um CSS Module

function HelloWorld() {
    return (
        <div className={styles.helloWorldContainer} >
            <h1 className={styles.helloWorldContent} >Hello, World!</h1>
        </div>
    )
}

export default HelloWorld