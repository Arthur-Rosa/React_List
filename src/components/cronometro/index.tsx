import Botao from "../button";
import { Relogio } from "./Relogio";
import style  from "./Cronometro.module.scss";

export function Cronometro(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o Cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Iniciar
            </Botao>
        </div>
    )
}