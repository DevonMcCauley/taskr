import { useState } from "react";
import { FormControl, Input, InputLabel, Box, Button } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Task from "../models/Task";

interface ITaskForm {
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

// Renders the form that allows users to enter new tasks
const TaskForm = ({ setTasks }: ITaskForm) => {
	const [taskName, setTaskName] = useState("");
	const [taskDescription, setTaskDescription] = useState("");

	// Called when the form is subbmited - creates a new task
	const handleTaskSubmission = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const task = new Task(Math.random(), taskName, taskDescription);
		setTasks((prevTasks) => [...prevTasks, task]);
		setTaskName("");
		setTaskDescription("");
		ShowTaskAddedToast();
	};

	const handleTaskNameChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setTaskName(event.target.value);
	};
	const handleTaskDescriptionChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setTaskDescription(event.target.value);
	};
	const ShowTaskAddedToast = () => toast.success("Task Added!");

	return (
		<Box
			display="flex"
			width="100%"
			alignItems="center"
			justifyContent="center"
		>
			<form onSubmit={handleTaskSubmission}>
				<FormControl fullWidth>
					<InputLabel htmlFor="TaskName">Name</InputLabel>
					<Input
						id="TaskName"
						onChange={handleTaskNameChange}
						type="text"
						value={taskName}
					/>
				</FormControl>
				<FormControl fullWidth sx={{ marginTop: 1 }}>
					<InputLabel htmlFor="TaskDescription">
						Description
					</InputLabel>
					<Input
						id="TaskDescription"
						onChange={handleTaskDescriptionChange}
						type="text"
						value={taskDescription}
					/>
				</FormControl>
				<FormControl sx={{ marginTop: 2 }} fullWidth>
					<Button type="submit" variant="contained">
						Add Task
					</Button>
				</FormControl>
			</form>
		</Box>
	);
};

export default TaskForm;
