import React, { useState } from "react";
import { Item } from "./item";
import style from './Lista.module.scss';

interface ITarefa{
  tarefa: string
  tempo: string
}

export function Lista({tarefas}: {tarefas: ITarefa[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item 
            key={index}
            selecionado={false}
            completado={false}
            id={""}
            tarefa={item.tarefa} 
            tempo={item.tempo}
          />
        ))}
      </ul>
    </aside>
  );
}
