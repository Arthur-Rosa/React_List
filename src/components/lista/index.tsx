import React, { useState } from "react";
import { ITarefa } from "../../types/Tarefas";
import { Item } from "./item";
import style from './Lista.module.scss';


export function Lista({tarefas, selecionaTarefa}:Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item 
            key={index}
            selecionaTarefa={selecionaTarefa}
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
