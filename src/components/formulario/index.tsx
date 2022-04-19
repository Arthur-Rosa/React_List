import React from 'react';
import Button from '../button';
import style from './Formulario.module.scss';
import { v4 as uuidv4} from 'uuid';
import { ITarefa } from '../../types/Tarefas';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>{
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault()
        this.props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]    
        )
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }

    render(){
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <br />
                    <label htmlFor="tarefa">Adicione um Estudo</label>
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                        placeholder="Agende um estudo"
                        required 
                    />
                </div>
                <div className={style.inputContainer}>
                    <br />
                    <label htmlFor="tempo">Defina um tempo</label>
                    <input
                        type='time'
                        name='tempo'
                        id='tempo'
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        step='1'
                        max='02:00:00'
                        min='00:00:00'
                        required
                        />
                </div>
                <Button type="submit">
                    Enviar
                </Button>
            </form>
        )
    }
}

export default Formulario