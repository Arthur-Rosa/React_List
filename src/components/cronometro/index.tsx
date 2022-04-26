import Botao from "../button";
import { Relogio } from "./Relogio";
import style  from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/date";
import { ITarefa } from "../../types/Tarefas";
import { useEffect, useState} from 'react';

interface Props {
    selecionado : ITarefa | undefined
    finalizarTarefa:() => void
}

export function Cronometro({selecionado, finalizarTarefa}:Props){
    const [tempo, setTempo] = useState <number>()

    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado?.tempo))
        }
    }, [selecionado])

    function regressiva(contador: number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            finalizarTarefa();
        }, 1000)
    }
    
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o Cronometro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Iniciar
            </Botao>
        </div>
    )
}