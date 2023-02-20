import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import FilterTasks from '../../filter-tasks/FilterTasks';
import './assets/list-end.css';

export default function ListEnd({tasks, setTasks, filter, setFilter}){
    const {width} = useWindowDimensions();
	
	return (
        <div className='list-end'>
			<span>{
				tasks.filter(task => !task.isDone).length
			} item{tasks.filter(task => !task.isDone).length !== 1 ? 's' : ''} left</span>
			<div className='computer-filter'>
				<FilterTasks filter={filter} setFilter={setFilter}/>
			</div>
			<button
				onClick={() => {
					setTasks((prev) => {
						return prev.filter((task) => !task.isDone);
					});
				}}
			>{width > 620 ? 'Clear Completed' : 'Clear'}</button>
		</div>
    )
}