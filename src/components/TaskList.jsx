"use client";
import { useContext } from "react";
import { TasksContext } from "@/contexts/tasksContext";
import ListItem from "./ListItem";

const TaskList = () => {
	const { state, dispatch } = useContext(TasksContext);

	const handleDelete = (id) => {
		dispatch({ type: "DELETE_TASK", payload: id });
	};

	const taskList = state.tasks.map((task) => {
		return <ListItem key={task.id} task={task} deleteTask={handleDelete}></ListItem>;
	});

	return <ul className="mt-4 px-3 max-w-sm mx-auto flex flex-col">{taskList}</ul>;
};

export default TaskList;
