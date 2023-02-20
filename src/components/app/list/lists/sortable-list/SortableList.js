import {
	DndContext,
	closestCenter
} from '@dnd-kit/core'
import {
	arrayMove,
	SortableContext,
	verticalListSortingStrategy
} from '@dnd-kit/sortable'
import ListEnd from '../../list-end/ListEnd';
import { SortableItem } from './SortableItem';
import '../assets/lists.css';
import ReorderText from '../../../reorder-text/ReorderText';

export default function SortableList({ tasks, setTasks, filter, setFilter }) {
	const handleDragEnd = ({ active, over }) => {
		if (active.id !== over.id) {
			setTasks((prev) => {
				const activeIndex = prev.indexOf(active.id);
				const overIndex = prev.indexOf(over.id);
				return arrayMove(prev, activeIndex, overIndex);
			})
		}
	}

	return (<div className='list'>
		<DndContext
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
		>
			<SortableContext
				items={tasks}
				strategy={verticalListSortingStrategy}
			>
				<div className='tasks'>
					{tasks.map((task, index) => <SortableItem key={task.label} task={task} index={index} setTasks={setTasks} />)}
				</div>
			</SortableContext>
		</DndContext>
		<ListEnd tasks={tasks} setTasks={setTasks} filter={filter} setFilter={setFilter} />
		<ReorderText />
	</div>);
}