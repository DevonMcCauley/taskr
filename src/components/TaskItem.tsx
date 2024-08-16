const TaskItem = ({ task, onTaskClick }: any) => {
	const handleClick = async () => {
		onTaskClick(task);
	};

	return (
		<div
			onClick={handleClick}
			key={task._id}
			className="bg-white shadow-md border rounded-lg p-4 mb-4"
		>
			<h2 className="text-xl font-semibold mb-2">{task.name}</h2>
			<p className="text-gray-600">{task.description}</p>
		</div>
	);
};

export default TaskItem;
