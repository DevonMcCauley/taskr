import TaskItem from "./TaskItem";

const TaskList = () => {
	const DUMMY_TASKS = [
		{
			id: 1,
			title: "Task 1",
			description: "This is a description for task 1",
		},
		{
			id: 2,
			title: "Task 2",
			description: "This is a description for task 2",
		},
		{
			id: 3,
			title: "Task 3",
			description: "This is a description for task 3",
		},
		{
			id: 4,
			title: "Task 4",
			description: "This is a description for task 4",
		},
	];

	const renderedTasks = DUMMY_TASKS.map((task) => (
		<TaskItem
			key={task.id}
			title={task.title}
			description={task.description}
		/>
	));
	return <div className="mt-5">{renderedTasks}</div>;
};

export default TaskList;
