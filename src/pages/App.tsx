import React, {useState} from 'react';
import Button from '../components/button';
import { Cronometro } from '../components/cronometro';
import Formulario from '../components/formulario';
import { Lista } from '../components/lista';
import { ITarefa } from '../types/Tarefas';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]> ([])

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={App} />
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
