import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UIFx from "uifx";
import Task from "../models/Task";

interface ITaskForm {
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

// Renders the form that allows users to enter new tasks
const TaskForm = ({ setTasks }: ITaskForm) => {
	// States
	const [taskName, setTaskName] = useState("");
	const [taskDescription, setTaskDescription] = useState("");

	// Sounds
	const successAudio = require("../assets/sounds/success.wav");
	const failAudio = require("../assets/sounds/fail.wav");
	const success = new UIFx(successAudio, { volume: 1.0 });
	const fail = new UIFx(failAudio, { volume: 1.0 });

	// Called when the form is subbmited - creates a new task
	const handleTaskSubmission = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (taskName === "") {
			toast.error("Task name cannot be blank");
			fail.play();
			return;
		} else if (taskDescription === "") {
			toast.error("Task description cannot be blank");
			fail.play();
			return;
		}
		const task = new Task(Math.random(), taskName, taskDescription);
		setTasks((prevTasks) => [...prevTasks, task]);
		setTaskName("");
		setTaskDescription("");
		ShowTaskAddedToast();
		success.play();
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
				<FormControl fullWidth sx={{ marginTop: 3 }}>
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
