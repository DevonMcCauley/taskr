"use client";
import { useState } from "react";
import { useContext } from "react";
import { TasksContext } from "@/contexts/tasksContext";

const TaskForm = () => {
	const { state, dispatch } = useContext(TasksContext);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// Check that the task name is not empty
		if (!name) return;

		if (!description) setDescription("");

		const task = {
			id: Math.floor(Math.random() * 1000),
			name,
			description,
		};

		dispatch({ type: "ADD_TASK", payload: task });

		setName("");
		setDescription("");
	};

	const handleNameChange = (e) => setName(e.target.value);

	const handleDescriptionChange = (e) => setDescription(e.target.value);

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-2 px-2">
			<input className="border rounded-md p-1" type="text" title="Task Name" placeholder="Task Name" value={name} onChange={handleNameChange} />
			<input
				className="border rounded-md p-1 "
				type="text"
				title="Task Description"
				placeholder="Task Description"
				value={description}
				onChange={handleDescriptionChange}
			/>
			<button className="border border-blue-400 p-2 rounded-md hover:bg-blue-400" type="submit">
				Add
			</button>
		</form>
	);
};

export default TaskForm;
