import { useState } from 'react';
import './assets/new-task.css'


export default function NewTask({setTasks}){
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')

    const keyDownHandler = ({key}) => {
        if (key === 'Enter'){
            setTasks((prev) => {
                if (!inputValue){
                    return prev;
                }
                if (prev.some(task => task.label === inputValue)){
                    setError('Task already exists');
                    return prev
                }
                setInputValue('');
                return [...prev, {label: inputValue, isDone: false}];
            })
        }
    }

    return(<div id='new-task'>
        <div id='circle'></div>
        <input
            type='text'
            value={inputValue} 
            onChange={(event) => {
                setInputValue(event.target.value)
                setError('');
            }}
            onKeyDown={keyDownHandler}
            placeholder='Create a new todo…'
        ></input>
        <span id='error'>{error}</span>
    </div>)
}   