import { useState } from "react"

function SeuNome({ setName }) {

    return (
        <div>
            <p>Digite o seu nome:</p>
            <input 
                type="text" 
                placeholder="Nome" 
                onChange={(e) => setName(e.target.value) }
                />
        </div>
    )
}

export default SeuNome