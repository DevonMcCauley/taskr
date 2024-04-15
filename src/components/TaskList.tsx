import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onTaskClick }: any) => {
	const builtTasks = tasks.map((task: any) => (
		<TaskItem key={task._id} task={task} onTaskClick={onTaskClick} />
	));

	return <div className="max-w-md mx-auto mt-5">{builtTasks}</div>;
};

export default TaskList;
