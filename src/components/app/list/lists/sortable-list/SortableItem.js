import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import Task from '../../task/Task';

export function SortableItem({task, index, setTasks}) {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition
	} = useSortable({id: task})

	const style = {
		transform: CSS.Transform.toString(transform),
		transition
	}

	return(<div ref={setNodeRef} style={style} {...attributes}>
		<Task listeners={listeners} index={index} setTasks={setTasks} task={task} />
	</div>)
}