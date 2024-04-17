import TaskItem from "./TaskItem";

// Builts out a list of tasks from the tasks array
const TaskList = ({ tasks, onTaskClick }: any) => {
	const builtTasks = tasks.map((task: any) => (
		<TaskItem key={task._id} task={task} onTaskClick={onTaskClick} />
	));

	return <div className="max-w-md mx-auto mt-5">{builtTasks}</div>;
};

export default TaskList;
