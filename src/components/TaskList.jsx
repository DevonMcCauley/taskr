"use client";
import { useContext } from "react";
import { TasksContext } from "@/contexts/tasksContext";
import ListItem from "./ListItem";
import Alert from "./UI/Alert";
import { CgFlag } from "react-icons/cg";

const TaskList = () => {
	const { state, dispatch } = useContext(TasksContext);

	const handleDelete = (id) => {
		dispatch({ type: "DELETE_TASK", payload: id });
	};

	const taskList = state.tasks.map((task) => {
		return <ListItem key={task.id} task={task} deleteTask={handleDelete}></ListItem>;
	});

	const alert = (
		<Alert type="info">
			<CgFlag className="text-lgxl" />
			No tasks yet!
		</Alert>
	);

	// If the taskList array is empty, display an alert
	// Otherwise, display the taskList array
	if (taskList.length === 0) {
		return <div className="mt-4 px-5 max-w-lg mx-auto flex flex-col">{alert}</div>;
	}

	return <ul className="mt-4 px-5 max-w-lg mx-auto flex flex-col">{taskList}</ul>;
};

export default TaskList;
