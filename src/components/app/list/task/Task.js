import React from "react";
import './assets/task.css'
import iconCheck from './assets/icon-check.svg';
import iconCross from './assets/icon-cross.svg';

export default function Task({ task, index, setTasks, listeners }) {
    const toggleStyle = {
        toggledFalse: {
        },
        toggledTrue: {
            background: 'linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)',
            border: 'none'
        }
    }

    const labelStyle = {
        toggledFalse: {},
        toggledTrue: {
            color: 'var(--text-done)',
            textDecoration: 'line-through'
        }
    }

    const toggleHandler = () => {
        setTasks((prev) => (
            prev.map((task, i) => i === index ? { ...task, isDone: !task.isDone } : task)
        ))
    }

    const removeHandler = () => {
        setTasks((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)])
    }

    return (<div className='task'>
        <button
            onClick={toggleHandler}
            className='toggle-button'
            style={task.isDone ?
                    toggleStyle.toggledTrue :
                    toggleStyle.toggledFalse}
        >{task.isDone ?
            <img src={iconCheck} alt=''></img> :
            <></>}
        </button>

        <span
            {...listeners}
            className='task-label'
            style={task.isDone ?
                labelStyle.toggledTrue :
                labelStyle.toggledFalse}
        >{task.label}</span>
        <img
            onClick={removeHandler}
            className='remove-button'
            src={iconCross}
            alt='X'
        ></img>
    </div>)
}