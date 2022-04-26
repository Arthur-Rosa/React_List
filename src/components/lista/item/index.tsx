import { ITarefa } from "../../../types/Tarefas";
import style from "../Lista.module.scss";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: Props) {
  return (
    <li
      className={`${style.item}${selecionado ? style.itemSelecionado : ''}${completado ? style.itemCompletado : ''}`}
      onClick={() => !completado && selecionaTarefa({ 
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id 
      })}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido} aria-label='tarefa completada'></span>}
    </li>
  );
}
