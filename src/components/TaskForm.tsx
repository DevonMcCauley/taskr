import { useRef } from "react";
import { FormControl, Input, InputLabel, Box, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Task from "../models/Task";

interface ITaskForm {
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

// Renders the form that allows users to enter new tasks
const TaskForm = ({ setTasks }: ITaskForm) => {
	const taskNameRef = useRef<HTMLInputElement>(null);
	const taskDescriptionRef = useRef<HTMLInputElement>(null);

	// Called when the form is subbmited - creates a new task
	const handleTaskSubmission = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const taskName = taskNameRef.current!.value;
		const taskDescription = taskDescriptionRef.current!.value;
		const task = new Task(Math.random(), taskName, taskDescription);
		taskNameRef.current!.value = "";
		taskDescriptionRef.current!.value = "";
		setTasks((prevTasks) => [...prevTasks, task]);
		notify();
	};

	const notify = () => toast.success("Task Added!");

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
					<Input id="TaskName" inputRef={taskNameRef} />
				</FormControl>
				<FormControl fullWidth sx={{ marginTop: 1 }}>
					<InputLabel htmlFor="TaskDescription">
						Description
					</InputLabel>
					<Input id="TaskDescription" inputRef={taskDescriptionRef} />
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
