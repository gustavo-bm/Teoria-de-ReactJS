import './App.css';

import { useState } from 'react';

import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento'
import Form from './components/Form'
import Condicional from './components/evento/Condicional'
import OutraLista from './components/evento/OutraLista'
import SeuNome from './components/SeuNome'
import Saudacao from './components/Saudacao'

function App() {

  const coresBandeira = ['verde', 'amarelo', 'azul']

  const [name, setName] = useState()

  return (
    <div className="App">
      <HelloWorld />
      <Pessoa nome="Gustavo" 
              idade="19"
              profissao="Estudande de BCC" 
              foto="https://via.placeholder.com/150"/>
      <Frase />
      
      <List />

      <h1 className="topicoEventos" >Testando eventos</h1>
      <Evento/>

      <h1>Form</h1>
      <Form />

      <h1>Renderização condicional</h1>
      <Condicional />

      <h1>Renderização de Listas</h1>
      <OutraLista cores={[]} />

      <h1>State Lift</h1>
      <SeuNome setName={setName} />
      <Saudacao nome={name}/>
    </div>
  );
}

export default App;
