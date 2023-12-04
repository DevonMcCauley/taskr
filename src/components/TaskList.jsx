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

	return <ul className="m-3">{taskList}</ul>;
};

export default TaskList;
