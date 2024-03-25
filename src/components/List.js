//fragment: dispensa a criação de elementos-pai html desnecessários

import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item fruta="Maracujá" nota={8} />
                <Item fruta="Limão" nota={7} />
                <Item fruta="Maçã" nota={8} />
                <Item fruta="Banana" nota={9} />
                <Item />
            </ul> 
        </> //tag sem nada = fragment 
        // strings são passadas entre aspas
        // mas numeros entre {}
    )
}

export default List