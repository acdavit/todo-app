import Task from "../task/Task"
import ListEnd from "../list-end/ListEnd";
import './assets/lists.css';

export default function SortedList({tasks, setTasks, done, filter, setFilter}){
    const filteredTasks = tasks.filter(task => task.isDone === done);
    
    return (<div className='list'>
        <div className='tasks'>
            {filteredTasks.map((task, index) => {
                return <Task key={task.label} task={task} index={index + done} setTasks={setTasks} />}
            )}
        </div>
        
        {filteredTasks.length === 0 ? 
            <div className='no-filtered-tasks'>
                <span>No {done ? 'completed' : 'active' } tasks</span>
            </div> : 
            <></>
        }
        <ListEnd tasks={tasks} setTasks={setTasks} filter={filter} setFilter={setFilter} />
    </div>)
}