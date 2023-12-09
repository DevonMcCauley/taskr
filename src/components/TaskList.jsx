"use client";
import { useContext } from "react";
import { CgErase, CgFlag } from "react-icons/cg";
import { TasksContext } from "@/contexts/tasksContext";
import ListItem from "./ListItem";
import Alert from "./UI/Alert";

const TaskList = () => {
	const { state, dispatch } = useContext(TasksContext);

	const handleComplete = (id) => {
		dispatch({ type: "TOGGLE_TASK", payload: id });
	};

	const taskList = state.tasks.map((task) => {
		return <ListItem key={task.id} task={task} onClick={handleComplete}></ListItem>;
	});

	const alert = (
		<Alert type="info">
			<CgFlag className="text-xl" />
			No tasks yet!
		</Alert>
	);

	const handleClick = () => {
		dispatch({ type: "CLEAR_COMPLETED" });
	};

	// If the taskList array is empty, display an alert
	// Otherwise, display the taskList array
	if (taskList.length === 0) {
		return <div className="mt-4 px-5 max-w-lg mx-auto flex flex-col">{alert}</div>;
	}

	return (
		<div className="mt-4 px-5 max-w-lg mx-auto">
			<button className="btn btn-warning" onClick={handleClick}>
				<CgErase /> Clear Completed
			</button>

			<ul className="mt-3 max-w-lg mx-auto flex flex-col">{taskList}</ul>
		</div>
	);
};

export default TaskList;
