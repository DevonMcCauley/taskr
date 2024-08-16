import React, { useState, ChangeEvent, FormEvent } from "react";
import { Input, Button } from "@nextui-org/react";
import { createTask } from "@/actions/taskActions";

interface TaskFormProps {
	loadTasks: () => void;
}

const TaskForm = ({ loadTasks }: TaskFormProps) => {
	const [taskName, setTaskName] = useState<string>("");
	const [taskDescription, setTaskDescription] = useState<string>("");

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await createTask(taskName, taskDescription);
		loadTasks();
		setTaskName("");
		setTaskDescription("");
	};

	const handleTaskNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTaskName(e.target.value);
	};

	const handleTaskDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTaskDescription(e.target.value);
	};

	return (
		<form className="max-w-md mx-auto" onSubmit={handleSubmit}>
			<div className="mb-4">
				<Input
					type="text"
					label="Task Name"
					placeholder="Enter Task Name"
					className="w-full"
					value={taskName}
					onChange={handleTaskNameChange}
				/>
			</div>
			<div className="mb-4">
				<Input
					type="text"
					label="Task Description"
					placeholder="Enter Task Description"
					className="w-full"
					value={taskDescription}
					onChange={handleTaskDescriptionChange}
				/>
			</div>
			<Button type="submit" color="primary" className="w-full">
				Submit
			</Button>
		</form>
	);
};

export default TaskForm;
