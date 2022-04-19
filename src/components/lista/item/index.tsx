import { ITarefa } from '../../../types/Tarefas';
import style from '../Lista.module.scss';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
  }

export function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}:Props){
    return(
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <h3>{tempo}</h3>
          </li>
    )
}