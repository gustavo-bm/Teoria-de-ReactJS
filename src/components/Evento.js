import Button from './evento/Button'

function Evento() {
  
  function meuEvento() {
    console.log('Fui ativado!!!') 
  }

  function segundoEvento() {
    console.log('Segundo evento ativado!')
  }

  return (
    <div>
      <p>Clique para ativar um evento:</p>
      <Button event={meuEvento} text="Meu evento" />
      <Button event={segundoEvento} text="Meu segundo evento" />
    </div>
  )
}

export default Evento