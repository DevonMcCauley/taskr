import Input from "../Input";
import { useDispatch } from "react-redux";
import { addTask } from "../../app/taskSlice";
import Button from "../Button";
import { useRef } from "react";

// Returns an input field and a button to allow the user to add a task
const TaskInput = () => {
	const dispatch = useDispatch();
	const inputRef = useRef("");

	// Calls the Redux addTask() function to add a task to the task list
	const addTaskHandler = () => {
		const taskName = inputRef.current.value;
		// TODO: The TaskID should be generated from the database
		const min = Math.ceil(1);
		const max = Math.floor(10000);
		const newTaskId = Math.floor(Math.random() * (max - min + 1)) + min;
		const task = { id: newTaskId, title: taskName };
		dispatch(addTask(task));
	};

	return (
		<div className="row mt-4">
			<div className="col-10">
				<Input inputRef={inputRef} />
			</div>
			<div className="col-2">
				<Button text={"Add"} onClick={addTaskHandler} />
			</div>
		</div>
	);
};

export default TaskInput;
