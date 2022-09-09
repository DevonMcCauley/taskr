import Box from "@mui/material/Box";
import Task from "../models/Task";

interface ITaskListProps {
	taskList: Task[];
}

const TaskList = ({ taskList }: ITaskListProps) => {
	// Loops through the task list to create a list of 'li' elements
	const tasks = taskList.map((task: Task) => {
		return <li key={task.id}>{task.name}</li>;
	});

	return (
		<Box
			display="flex"
			width="100%"
			alignItems="center"
			justifyContent="center"
			marginTop={5}
		>
			<ul>{tasks}</ul>
		</Box>
	);
};

export default TaskList;
