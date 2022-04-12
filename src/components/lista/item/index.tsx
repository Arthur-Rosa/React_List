import { ITarefa } from '../../../types/Tarefas';
import style from '../Lista.module.scss';

export function Item({tarefa, tempo, selecionado, completado, id}: ITarefa){
    return(
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <h3>{tempo}</h3>
          </li>
    )
}