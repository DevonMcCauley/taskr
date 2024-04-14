import React, { useState, ChangeEvent, FormEvent } from "react";
import { Input, Button } from "@nextui-org/react";
import { useUser } from "@clerk/nextjs";

const TaskForm: React.FC = () => {
	const apiURL = process.env.NEXT_PUBLIC_API_URL;

	const [taskName, setTaskName] = useState<string>("");
	const [taskDescription, setTaskDescription] = useState<string>("");
	const { user } = useUser();
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Make a call to the backend to create a task
		const response = await fetch(`${apiURL}/tasks`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: taskName,
				description: taskDescription,
				email: user?.primaryEmailAddress?.emailAddress,
			}),
		});

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
