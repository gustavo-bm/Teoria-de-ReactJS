function Saudacao({ nome }) {
    return (
        <div>
            <>{nome && <p>Saudação, {nome}</p>}</>
        </div>
        
    )
}

export default Saudacao