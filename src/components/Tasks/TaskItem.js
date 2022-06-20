import classes from "./TaskItem.module.css";
import { useDispatch } from "react-redux";
import { removeTask } from "../../app/taskSlice";

// A single task - displayed in Bootstrap Card
const TaskItem = (props) => {
	const dispatch = useDispatch();

	const { title, id, description } = props.task;

	// Called when the task is clicked on - removes the item
	const removeTaskHandler = () => {
		dispatch(removeTask(id));
	};

	const taskItemClass = `card mb-3 ${classes.taskitem__box}`;

	return (
		<div className={taskItemClass} onClick={removeTaskHandler}>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
			</div>
		</div>
	);
};

export default TaskItem;
