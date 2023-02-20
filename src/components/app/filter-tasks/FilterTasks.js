import './assets/filter-tasks.css';

export default function FilterTasks({ filter, setFilter }) {
	const selected = {
		color: '#3A7CFD'
	}

	return (<div className='filter-tasks'>
		<button
			onClick={() => setFilter('all')}
			style={filter === 'all' ? selected : {}}
		>All</button>
		<button
			onClick={() => setFilter(false)}
			style={filter === false ? selected : {}}
		>Active</button>
		<button
			onClick={() => setFilter(true)}
			style={filter === true ? selected : {}}
		>Completed</button>
	</div>)
}