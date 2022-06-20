import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

// Renders a list of TaskItems
const TaskList = () => {
	const tasks = useSelector((state) => state.task.taskList);

	const renderedTasks = tasks.map((task) => (
		<TaskItem
			key={task.id}
			title={task.title}
			description={task.description}
		/>
	));
	return <div className="mt-5">{renderedTasks}</div>;
};

export default TaskList;
