function OutraLista( {cores} ) {
    return (
        <>
            <h3>Lista das cores da bandeira do Brasil:</h3>
            { cores.length > 0 ? (
                cores.map((item, index) => (
                <p key={index}>{item}</p>
            ))) : (
                <p>Não há itens na lista</p>
            )}
        </>
        

    )
}

export default OutraLista