import './assets/App.css';

import { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import NewTask from './new-task/NewTask';
import FilterTasks from './filter-tasks/FilterTasks';
import SortableList from './list/lists/sortable-list/SortableList';
import SortedList from './list/lists/SortedList';
import NoTasks from './no-tasks/NoTasks';
import Header from './header/Header';

function App({darkMode, setDarkMode}) {
	const [tasks, setTasks] = useLocalStorage('tasks', []);
	const [filter, setFilter] = useState('all');

	return (<div id='app'>
		<Header darkMode={darkMode} setDarkMode={setDarkMode} />
		<NewTask setTasks={setTasks}/>
		{tasks.length > 0 ? 
			<>
				{filter === 'all' ? 
					<SortableList
						tasks={tasks}
						setTasks={setTasks}
						filter={filter}
						setFilter={setFilter}/> :
					<SortedList
						tasks={tasks}
						setTasks={setTasks} 
						done={filter}
						filter={filter}
						setFilter={setFilter}/> }
				<br></br>
				<div id='mobile-filter'>
					<FilterTasks filter={filter} setFilter={setFilter} />
				</div>
			</>	:
			<NoTasks />
		}
	</div>);
}

export default App;