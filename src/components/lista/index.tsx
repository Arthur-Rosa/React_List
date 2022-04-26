import { useState } from "react";

import { ITarefa } from "../../types/Tarefas";

import { Item } from "./item";

import style from "./Lista.module.scss";

interface Props {
  tarefas: ITarefa[];

  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>

      <ul>
        {tarefas.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}
