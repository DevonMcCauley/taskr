import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

// Renders a list of TaskItems
const TaskList = () => {
	const tasks = useSelector((state) => state.task.taskList);
	const renderedTasks = tasks.map((task) => (
		<TaskItem key={task.id} task={task} />
	));
	return <div className="mt-5">{renderedTasks}</div>;
};

export default TaskList;
